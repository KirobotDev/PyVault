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
import sqlite3
from system_info import sys

db_path = "./secret/passwords.db"


def delete() -> None:
    sys()
    name = input("Enter the name of the website to delete: ").strip()

    if not os.path.exists(db_path):
        print("No password database found.")
        return

    try:
        with sqlite3.connect(db_path) as conn:
            cursor = conn.cursor()

            cursor.execute(
                "SELECT id, website FROM passwords WHERE website = ?",
                (name,)
            )
            results = cursor.fetchall()

            if not results:
                print("Website not found.")
                return

            delete_id = None

            if len(results) > 1:
                print(f"\nFound {len(results)} passwords for {name}:")

                for i, row in enumerate(results):
                    print(f"[{i + 1}] {row[1]}")

                choice = input(
                    "Choose a password to delete, or 'all' to delete every one (0 to cancel): "
                ).strip().lower()

                if choice == "all":
                    cursor.execute(
                        "DELETE FROM passwords WHERE website = ?",
                        (name,)
                    )
                    conn.commit()
                    sys()
                    print("Website deleted successfully.")
                    return

                if not choice.isdigit():
                    print("Invalid choice.")
                    return

                choice = int(choice)

                if choice < 1 or choice > len(results):
                    print("Invalid choice.")
                    return

                delete_id = results[choice - 1][0]

            else:
                delete_id = results[0][0]

            cursor.execute("DELETE FROM passwords WHERE id = ?", (delete_id,))
            conn.commit()

    except Exception as e:
        print(f"Error: {e}")
        return

    sys()
    print("Website deleted successfully.")


if __name__ == "__main__":
    delete()