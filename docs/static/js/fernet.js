var PyVault = (function () {

    var B64_ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";

    function bytesToBase64(bytes) {
        var out = "";
        for (var i = 0; i < bytes.length; i += 3) {
            var b0 = bytes[i], b1 = bytes[i + 1], b2 = bytes[i + 2];
            out += B64_ALPHABET.charAt(b0 >> 2);
            out += B64_ALPHABET.charAt(((b0 & 3) << 4) | ((i + 1 < bytes.length) ? b1 >> 4 : 0));
            if (i + 1 < bytes.length) out += B64_ALPHABET.charAt(((b1 & 15) << 2) | ((i + 2 < bytes.length) ? b2 >> 6 : 0));
            else out += "=";
            if (i + 2 < bytes.length) out += B64_ALPHABET.charAt(b2 & 63);
            else out += "=";
        }
        return out;
    }

    function base64ToBytes(str) {
        str = str.replace(/=+$/, "");
        var out = [];
        var len = str.length;
        for (var i = 0; i < len; i += 4) {
            var c1 = B64_ALPHABET.indexOf(str.charAt(i));
            var c2 = B64_ALPHABET.indexOf(str.charAt(i + 1));
            var c3 = i + 2 < len ? B64_ALPHABET.indexOf(str.charAt(i + 2)) : 0;
            var c4 = i + 3 < len ? B64_ALPHABET.indexOf(str.charAt(i + 3)) : 0;
            out.push((c1 << 2) | (c2 >> 4));
            if (i + 2 < len) out.push(((c2 & 15) << 4) | (c3 >> 2));
            if (i + 3 < len) out.push(((c3 & 3) << 6) | c4);
        }
        return new Uint8Array(out);
    }

    function utf8Encode(str) {
        var bytes = new TextEncoder().encode(str);
        return bytes;
    }

    function utf8Decode(bytes) {
        return new TextDecoder().decode(bytes);
    }

    function concat(arrays) {
        var total = 0;
        arrays.forEach(function (a) { total += a.byteLength || a.length; });
        var result = new Uint8Array(total);
        var offset = 0;
        arrays.forEach(function (a) {
            result.set(a, offset);
            offset += a.byteLength || a.length;
        });
        return result;
    }

    function importKey(raw, algo, usage) {
        return crypto.subtle.importKey("raw", raw, algo, false, usage);
    }

    async function aesCbcEncrypt(keyBytes, iv, data) {
        var cryptoKey = await importKey(keyBytes, { name: "AES-CBC" }, ["encrypt"]);
        var enc = await crypto.subtle.encrypt({ name: "AES-CBC", iv: iv }, cryptoKey, data);
        return new Uint8Array(enc);
    }

    async function aesCbcDecrypt(keyBytes, iv, data) {
        var cryptoKey = await importKey(keyBytes, { name: "AES-CBC" }, ["decrypt"]);
        var dec = await crypto.subtle.decrypt({ name: "AES-CBC", iv: iv }, cryptoKey, data);
        return new Uint8Array(dec);
    }

    async function hmacSign(keyBytes, data) {
        var cryptoKey = await importKey(keyBytes, { name: "HMAC", hash: "SHA-256" }, ["sign"]);
        var sig = await crypto.subtle.sign("HMAC", cryptoKey, data);
        return new Uint8Array(sig);
    }

    function generateKey() {
        var rnd = crypto.getRandomValues(new Uint8Array(32));
        return bytesToBase64(rnd);
    }

    async function encrypt(keyStr, dataStr) {
        var key = base64ToBytes(keyStr);
        var signingKey = key.slice(0, 16);
        var encryptionKey = key.slice(16, 32);
        var iv = crypto.getRandomValues(new Uint8Array(16));
        var now = Math.floor(Date.now() / 1000);

        var ts = new Uint8Array(8);
        for (var i = 7; i >= 0; i--) {
            ts[i] = now & 0xff;
            now = Math.floor(now / 256);
        }

        var cipher = await aesCbcEncrypt(encryptionKey, iv, utf8Encode(dataStr));
        var part = concat([new Uint8Array([0x80]), ts, iv, cipher]);
        var hmac = await hmacSign(signingKey, part);
        var token = concat([part, hmac]);
        return bytesToBase64(token);
    }

    async function decrypt(keyStr, tokenStr) {
        var key = base64ToBytes(keyStr);
        if (key.length !== 32) throw new Error("Invalid key");
        var signingKey = key.slice(0, 16);
        var encryptionKey = key.slice(16, 32);
        var token = base64ToBytes(tokenStr);
        if (token.length < 73) throw new Error("Token too short");
        if (token[0] !== 0x80) throw new Error("Invalid token version");

        var body = token.slice(0, token.length - 32);
        var givenHmac = token.slice(token.length - 32);
        var computedHmac = await hmacSign(signingKey, body);
        if (!constantTimeEqual(givenHmac, computedHmac)) throw new Error("Invalid HMAC or wrong key");

        var iv = body.slice(9, 25);
        var cipher = body.slice(25);
        var plain = await aesCbcDecrypt(encryptionKey, iv, cipher);
        return utf8Decode(plain);
    }

    function constantTimeEqual(a, b) {
        if (a.length !== b.length) return false;
        var diff = 0;
        for (var i = 0; i < a.length; i++) diff |= a[i] ^ b[i];
        return diff === 0;
    }

    return {
        generateKey: generateKey,
        encrypt: encrypt,
        decrypt: decrypt,
        encryptSyncPrototype: encrypt,
        _b64encode: bytesToBase64,
        _b64decode: base64ToBytes
    };

})();
