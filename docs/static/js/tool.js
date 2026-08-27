document.addEventListener("DOMContentLoaded", function () {

    var STORE_KEY = "pyvault.key";
    var STORE_VAULT = "pyvault.vault";

    var termOut = document.getElementById("term-out");
    var termIn = document.getElementById("term-in");

    var currentKey = localStorage.getItem(STORE_KEY) || "";
    var busy = false;
    var pending = null;

    var BANNER = [
        "▄▄▄▄▄▄     ▄▄▄                 ▄▄     ",
        "█▀██▀▀▀█▄  █▀██  ██▀▀           ██ █▄ ",
        "  ██▄▄▄█▀    ██  ██             ██▄██▄",
        "  ██▀▀▀██ ██ ██  ██ ▄▀▀█▄ ██ ██ ██ ██ ",
        "▄ ██   ██▄██ ██▄ ██ ▄█▀██ ██ ██ ██ ██ ",
        "▀██▀  ▄▄▀██▀  ▀███▀▄▀█▄██▄▀██▀█▄██▄██ ",
        "        ██                           ",
        "        ▀▀▀                           ",
        "",
        "S. [Stars Project]          0. [Generate Key (Obliged)]     Q. [Leave]",
        "",
        "        1. [Add Password]   4. [Export (Zipfiles)]",
        "        2. [List Pswd]      5. [Delete Passwd]",
        "        3. [Decrypt Pswd]   6. [Search Website]",
        ""
    ];

    function getVault() {
        try {
            return JSON.parse(localStorage.getItem(STORE_VAULT) || "[]");
        } catch (e) {
            return [];
        }
    }

    function setVault(v) {
        localStorage.setItem(STORE_VAULT, JSON.stringify(v));
    }

    function esc(s) {
        return s.replace(/[&<>"]/g, function (c) {
            return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
        });
    }

    function print(html) {
        var line = document.createElement("div");
        line.className = "term-line";
        line.innerHTML = html;
        termOut.appendChild(line);
        termOut.scrollTop = termOut.scrollHeight;
    }

    function printText(txt, cls) {
        var line = document.createElement("div");
        line.className = "term-line" + (cls ? " " + cls : "");
        line.textContent = txt;
        termOut.appendChild(line);
        termOut.scrollTop = termOut.scrollHeight;
    }

    function showBanner() {
        BANNER.forEach(function (l) {
            if (l.indexOf("▄") !== -1 || l.indexOf("█") !== -1 || l.indexOf("▀") !== -1) {
                print('<span class="t-orange">' + esc(l) + "</span>");
            } else {
                printText(l || " ");
            }
        });
        var saved = getVault();
        if (saved.length > 0) {
            printText(saved.length + " entrée(s) enregistrée(s). Tape 2 pour lister. (" +
                (currentKey ? "clé chargée" : "aucune clé — tape 0") + ")");
        } else {
            printText("Démarrage : aucun mot de passe enregistré. Tape 0 pour générer une clé.");
        }
    }

    function ask(question, cb) {
        pending = { question: question, cb: cb };
        print('<div class="term-q">' + esc(question) + "</div>");
    }

    function dispatch(input) {
        var cmd = input.trim();

        if (cmd === "") {
            print();
            return;
        }

        if (cmd.toLowerCase() === "help" || cmd.toLowerCase() === "h") {
            printText("0 générer une clé · 1 ajouter · 2 lister · 3 déchiffrer · 4 exporter · 5 supprimer · 6 rechercher · s stars · q quitter · clear nettoyer");
            return;
        }
        if (cmd.toLowerCase() === "clear" || cmd.toLowerCase() === "cls") {
            termOut.innerHTML = "";
            showBanner();
            return;
        }

        switch (cmd) {
            case "0":
                currentKey = generateKeyCmd();
                localStorage.setItem(STORE_KEY, currentKey);
                printText("Clé Fernet générée et enregistrée dans key.txt", "t-ok");
                printText("key.txt → " + currentKey, "t-dim");
                break;

            case "1":
                if (!currentKey) {
                    printText("Tape 0 d'abord pour générer une clé.", "t-err");
                    break;
                }
                ask("Enter the name of your website (e.g. github) :", function (site) {
                    ask("Enter your password :", async function (pass) {
                        try {
                            var token = await PyVault.encrypt(currentKey, pass);
                            var vault = getVault();
                            var idx = vault.findIndex(function (e) { return e.site === site.trim(); });
                            if (idx !== -1) vault[idx].token = token;
                            else vault.push({ site: site.trim(), token: token });
                            setVault(vault);
                            printText("Encrypted password : " + token, "t-dim");
                            printText("Enregistré dans secret/" + site.trim() + ".txt", "t-ok");
                        } catch (e) {
                            printText("Erreur : " + e.message, "t-err");
                        }
                    });
                });
                break;

            case "2":
                listEntries();
                break;

            case "3":
                if (!currentKey) {
                    printText("Tape 0 d'abord pour générer (ou récupérer) une clé.", "t-err");
                    break;
                }
                ask("Enter the file name example (github.txt) :", function (name) {
                    decryptEntry(name);
                });
                break;

            case "4":
                exportFiles();
                break;

            case "5":
                ask("Enter the name of the file to delete (just the name, no extension) :", function (name) {
                    deleteEntry(name);
                });
                break;

            case "6":
                ask("Enter the name of your file :", function (term) {
                    searchEntries(term);
                });
                break;

            case "s":
            case "S":
                window.open("https://github.com/KirobotDev/PyVault", "_blank");
                printText("Ouverture du dépôt… ⭐", "t-ok");
                break;

            case "q":
            case "Q":
                printText("À bientôt ! Recharge la page pour relancer une session CLI.", "t-dim");
                termIn.disabled = true;
                break;

            default:
                printText("That choice doesn't exist. Tape help pour voir les commandes.", "t-err");
        }
    }

    function generateKeyCmd() {
        return PyVault.generateKey();
    }

    function listEntries() {
        var vault = getVault();
        if (vault.length === 0) {
            printText("secret/ est vide. Tape 1 pour ajouter un mot de passe.", "t-dim");
            return;
        }
        printText("Contenu de secret/ :", "t-ok");
        vault.forEach(function (e) {
            printText("• " + e.site + ".txt", "t-acc");
        });
        printText("(" + vault.length + " entrée(s))");
    }

    async function decryptEntry(name) {
        var entry = getVault().filter(function (e) {
            return e.site === name.trim() || (e.site + ".txt") === name.trim();
        })[0];
        if (!entry) {
            printText("Fichier introuvable : " + name, "t-err");
            return;
        }
        try {
            var plain = await PyVault.decrypt(currentKey, entry.token);
            printText("Your Password is [ " + plain + " ]", "t-green");
        } catch (e) {
            printText("Échec du déchiffrement : " + e.message, "t-err");
        }
    }

    function searchEntries(term) {
        var q = term.trim().toLowerCase();
        var found = getVault().filter(function (e) { return e.site.toLowerCase().indexOf(q) !== -1; });
        if (found.length === 0) {
            printText("Aucun résultat pour « " + term + " »", "t-dim");
            return;
        }
        found.forEach(function (e) { printText("• secret/" + e.site + ".txt", "t-acc"); });
    }

    function deleteEntry(name) {
        var target = name.trim();
        var targetTxt = target + ".txt";
        var vault = getVault();
        var before = vault.length;
        var next = vault.filter(function (e) {
            return e.site !== target && e.site !== targetTxt && (e.site + ".txt") !== target &&
                (e.site + ".txt") !== targetTxt;
        });
        setVault(next);
        if (next.length === before) {
            printText("Introuvable : " + name, "t-err");
        } else {
            printText("Delete Success — suppression de " + target + ".txt", "t-ok");
        }
    }

    function exportFiles() {
        var vault = getVault();
        if (vault.length === 0) {
            printText("Rien à exporter. Ajoute un mot de passe d'abord.", "t-err");
            return;
        }
        var files = vault.map(function (e) { return { name: e.site + ".txt", data: e.token + "\n" }; });
        var blob = buildZip(files);
        var url = URL.createObjectURL(blob);
        var a = document.createElement("a");
        a.href = url;
        a.download = "export.zip";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        setTimeout(function () { URL.revokeObjectURL(url); }, 1200);
        printText("export.zip téléchargé (" + vault.length + " fichier(s)).", "t-ok");
    }

    termIn.addEventListener("keydown", function (e) {
        if (e.key !== "Enter") return;
        var val = termIn.value;
        termIn.value = "";
        printText("Choices : " + val, "t-cmd");

        if (pending) {
            var p = pending;
            pending = null;
            p.cb(val);
            return;
        }
        dispatch(val);
    });

    var t = document.getElementById("term-in");
    if (t) {
        t.addEventListener("focus", function () {
            setTimeout(function () {
                termOut.scrollTop = termOut.scrollHeight;
            }, 10);
        });
    }

    showBanner();
    termIn.focus();

    function buildZip(files) {
        var enc = new TextEncoder();
        var crcTable = [];
        for (var n = 0; n < 256; n++) {
            var c = n;
            for (var k = 0; k < 8; k++) c = (c & 1) ? (0xedb88320 ^ (c >>> 1)) : (c >>> 1);
            crcTable[n] = c >>> 0;
        }
        function crcOf(bytes) {
            var c = 0xffffffff;
            for (var i = 0; i < bytes.length; i++) c = crcTable[(c ^ bytes[i]) & 0xff] ^ (c >>> 8);
            return (c ^ 0xffffffff) >>> 0;
        }
        function u32(a, o, v) {
            a[o] = v & 255; a[o + 1] = (v >>> 8) & 255; a[o + 2] = (v >>> 16) & 255; a[o + 3] = (v >>> 24) & 255;
        }
        function u16(a, o, v) { a[o] = v & 255; a[o + 1] = (v >>> 8) & 255; }

        var datas = [];
        var offset = 0;
        files.forEach(function (f) {
            var nb = enc.encode(f.name);
            var db = enc.encode(f.data);
            var crc = crcOf(db);
            var local = new Uint8Array(30 + nb.length + db.length);
            u32(local, 0, 0x04034b50);
            u16(local, 4, 20);
            u16(local, 6, 0x0800);
            u32(local, 14, crc);
            u32(local, 18, db.length);
            u32(local, 22, db.length);
            u16(local, 26, nb.length);
            local.set(nb, 30);
            local.set(db, 30 + nb.length);
            datas.push({ b: local, nm: nb, crc: crc, len: db.length, off: offset });
            offset += local.length;
        });

        var centralSize = datas.reduce(function (s, d) { return s + 46 + d.nm.length; }, 0);
        var centralStart = offset;
        var centralBuf = new Uint8Array(centralSize);
        var p = 0;
        datas.forEach(function (d) {
            u32(centralBuf, p, 0x02014b50);
            u16(centralBuf, p + 4, 20);
            u16(centralBuf, p + 6, 20);
            u16(centralBuf, p + 8, 0x0800);
            u32(centralBuf, p + 16, d.crc);
            u32(centralBuf, p + 20, d.len);
            u32(centralBuf, p + 24, d.len);
            u16(centralBuf, p + 28, d.nm.length);
            u32(centralBuf, p + 42, d.off);
            centralBuf.set(d.nm, p + 46);
            p += 46 + d.nm.length;
        });

        var eocd = new Uint8Array(22);
        u32(eocd, 0, 0x06054b50);
        u16(eocd, 8, files.length);
        u16(eocd, 10, files.length);
        u32(eocd, 12, centralStart);
        u32(eocd, 16, centralSize);

        var total = offset + centralSize + 22;
        var result = new Uint8Array(total);
        var o = 0;
        datas.forEach(function (d) { result.set(d.b, o); o += d.b.length; });
        result.set(centralBuf, o);
        return new Blob([result], { type: "application/zip" });
    }

});
