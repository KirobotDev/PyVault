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
from system_info import 画面クリア

db_path = "./secret/passwords.db"


def 検索() -> str:
    画面クリア()
    クエリ = input("検索するウェブサイトの名前を入力してください : ").strip()
    画面クリア()

    if not os.path.exists(db_path):
        print("パスワードデータベースが見つかりません。")
        return ""

    try:
        with sqlite3.connect(db_path) as conn:
            cursor = conn.cursor()
            cursor.execute(
                "SELECT id, website FROM passwords WHERE website LIKE ?",
                (f"%{クエリ}%",)
            )
            結果 = cursor.fetchall()
    except Exception as 例外:
        print(f"エラー {例外}")
        return ""

    if not 結果:
        print("ウェブサイトが見つかりません。")
        return ""

    for 行 in 結果:
        print(f"[{行[0]}] {行[1]}")
    return ""


if __name__ == "__main__":
    検索()