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
import os
import sys as _sys
import sqlite3
from dpapi_utils import unprotect

file_path = "key.txt"
db_path = "./secret/passwords.db"


def decrypt() -> str | int | bool:

    if os.path.exists(file_path):

        with open(file_path, "r", encoding="utf-8") as file:
            key = file.read().strip()

        if _sys.platform == "win32":
            key = unprotect(key)

    else:
        print("No key found.")
        sys()

        key = input("Enter your key: ").strip()

    try:
        cipher = Fernet(key.encode())

        if not os.path.exists(db_path):
            print("No password database found.")
            return False

        with sqlite3.connect(db_path) as conn:
            cursor = conn.cursor()

            website = input(
                "Enter the name of the website: "
            ).strip()

            sys()

            cursor.execute(
                "SELECT password FROM passwords WHERE website = ?",
                (website,)
            )

            results = cursor.fetchall()

            if not results:
                print("Password not found.")
                return False

            if len(results) > 1:

                print(f"\nFound {len(results)} passwords for {website}:")

                for i in range(len(results)):
                    print(f"[{i + 1}] Password {i + 1}")

                choice = input(
                    "Choose a password: "
                ).strip()

                if not choice.isdigit():
                    print("Invalid choice.")
                    return False

                choice = int(choice)

                if choice < 1 or choice > len(results):
                    print("Invalid choice.")
                    return False

                encrypted_password = results[choice - 1][0]

            else:
                encrypted_password = results[0][0]

            decrypted_password = cipher.decrypt(
                encrypted_password.encode()
            ).decode()

            print(f"\nWebsite: {website}")
            print(f"Your password is: {decrypted_password}")

            return decrypted_password

    except Exception as e:
        print(f"Error: {e}")
        return False


if __name__ == "__main__":
    decrypt()