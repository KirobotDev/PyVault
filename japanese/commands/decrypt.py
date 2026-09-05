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
from system_info import 画面クリア
import os
import sys
import sqlite3
from dpapi_utils import unprotect

ファイルパス = "key.txt"
db_path = "./secret/passwords.db"


def 復号化() -> str | int | bool:

    if os.path.exists(ファイルパス):

        with open(ファイルパス, "r", encoding="utf-8") as ファイル:
            鍵 = ファイル.read().strip()

        if sys.platform == "win32":
            鍵 = unprotect(鍵)

    else:
        print("鍵が見つかりません")
        画面クリア()

        鍵 = input("鍵を入力してください : ").strip()

    try:
        暗号器 = Fernet(鍵.encode())

        if not os.path.exists(db_path):
            print("パスワードデータベースが見つかりません。")
            return False

        with sqlite3.connect(db_path) as conn:
            cursor = conn.cursor()

            ウェブサイト = input(
                "ウェブサイトの名前を入力してください : "
            ).strip()

            画面クリア()

            cursor.execute(
                "SELECT password FROM passwords WHERE website = ?",
                (ウェブサイト,)
            )

            結果 = cursor.fetchall()

            if not 結果:
                print("パスワードが見つかりません。")
                return False

            if len(結果) > 1:

                print(f"\n{ウェブサイト} のパスワードが {len(結果)} 件見つかりました:")

                for i in range(len(結果)):
                    print(f"[{i + 1}] パスワード {i + 1}")

                選択 = input(
                    "パスワードを選択してください : "
                ).strip()

                if not 選択.isdigit():
                    print("無効な選択です。")
                    return False

                選択 = int(選択)

                if 選択 < 1 or 選択 > len(結果):
                    print("無効な選択です。")
                    return False

                暗号化パスワード = 結果[選択 - 1][0]

            else:
                暗号化パスワード = 結果[0][0]

            復号パスワード = 暗号器.decrypt(
                暗号化パスワード.encode()
            ).decode()

            print(f"\nウェブサイト: {ウェブサイト}")
            print(f"あなたのパスワードは [ {復号パスワード} ] です")

            return 復号パスワード

    except Exception as 例外:
        print(f"エラー {例外}")
        return False


if __name__ == "__main__":
    復号化()