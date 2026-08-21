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

import os
from cryptography.fernet import Fernet


"""
Import  All Commands ;-;
"""

from commands.generate_key import generate_key
from commands.add import add_passwd
from commands.list import list
from commands.decrypt import decrypt

def main() -> str:
    cli = input("""
        ▄▄▄▄▄▄     ▄▄▄                ▄▄     
      █▀██▀▀▀█▄  █▀██  ██▀▀           ██ █▄ 
        ██▄▄▄█▀    ██  ██             ██▄██▄
        ██▀▀▀██ ██ ██  ██ ▄▀▀█▄ ██ ██ ██ ██ 
      ▄ ██   ██▄██ ██▄ ██ ▄█▀██ ██ ██ ██ ██ 
       ▀██▀  ▄▄▀██▀  ▀███▀▄▀█▄██▄▀██▀█▄██▄██ 
                ██                           
                ▀▀▀           

            0. [Generate Key (Obliged)]
    1. [Add Password]
    2. [List Pswd]
    3. [Decrypt Pswd]

    Choices : """)

    if cli == "0":
        generate_key()

    if cli == "1":
        add_passwd()

    if cli == "2":
        list()

    if cli == "3":
        decrypt()

if __name__ == "__main__":
    main()  