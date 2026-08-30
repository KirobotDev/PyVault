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

import time
import webbrowser
from cryptography.fernet import Fernet

"""
Import Système function
"""

from system_info import sys

"""
Import  All Commands ;-;
"""

from commands.generate_key import generate_key
from commands.add import add_passwd
from commands.list import list
from commands.decrypt import decrypt
from commands.export import export
from commands.delete import delete
from commands.search import search

"""
Import All test unitary
"""

from tests.add_test import add_passwd as test_add_passwd
from tests.decrypt_test import decrypt as test_decrypt

def test_unitary() -> str:
    test_add_passwd()
    test_decrypt()

def main() -> str | int:

    test_unitary()

    while True:
        generate_key()
        cli = input("""
        ▄▄▄▄▄▄     ▄▄▄                 ▄▄     
       █▀██▀▀▀█▄  █▀██  ██▀▀           ██ █▄ 
         ██▄▄▄█▀    ██  ██             ██▄██▄
         ██▀▀▀██ ██ ██  ██ ▄▀▀█▄ ██ ██ ██ ██ 
       ▄ ██   ██▄██ ██▄ ██ ▄█▀██ ██ ██ ██ ██ 
       ▀██▀  ▄▄▀██▀  ▀███▀▄▀█▄██▄▀██▀█▄██▄██ 
                ██                           
                ▀▀▀           

S. [Stars Project]                                   Q. [Leave]
        
        1. [Add Password]   4. [Export (Zipfiles)]
        2. [List Password]      5. [Delete Password]
        3. [Decrypt Password]   6. [Search Website]

        Choice: """)
        sys()


        if cli == "1":
            add_passwd()
            time.sleep(2)
            sys()
            
        elif cli == "2":
            list()
            time.sleep(2)
            sys()

        elif cli == "3":
            decrypt()
            time.sleep(2)
            sys()

        elif cli == "4":
            export()
            time.sleep(2)
            sys()

        elif cli == "5":
            delete()
            time.sleep(2)
            sys()

        elif cli == "6":
            search()
            time.sleep(2)
            sys()

        elif cli.lower() == "s":
            webbrowser.open_new_tab("https://github.com/KirobotDev/PyVault")
            sys()

        elif cli.lower() == "q":
            break

        else:
            print("Invalid choice. Check the code on https://github.com/KirobotDev/PyVault, or suggest a change at https://github.com/KirobotDev/PyVault/issues.")
            time.sleep(2)

if __name__ == "__main__":
    main()
