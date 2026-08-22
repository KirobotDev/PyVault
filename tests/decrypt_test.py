"""
MIT License

Copyright (c) 2026 xql

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

"""

from cryptography.fernet import Fernet
from system_info import sys

"""
- All information is a for test

- D'ont use key & password

- Thanks.
"""


def decrypt() -> str | int | bool:
    sys()
    key = "Hli06nYKVJ2jVTIfgOko9RCgpRv6h1KsJpQGKlUJ_14="
    cipher = Fernet(key)
    sys()
    name = "test_unitary.txt"
    sys()
    try:
        with open(f"./test_unitary/{name}", "rb") as file:
            content = file.read()

        decrypt_passwd = cipher.decrypt(content)
        print(f"Your Password is [ {decrypt_passwd.decode()} ]")
        sys()
        return decrypt_passwd.decode()
    except Exception as e:
        print(f"Error {e}")
        return ""

if __name__ == "__main__":
    decrypt()