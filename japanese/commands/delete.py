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


def 削除() -> None:
    画面クリア()
    名前 = input("削除するウェブサイトの名前を入力してください : ").strip()

    if not os.path.exists(db_path):
        print("パスワードデータベースが見つかりません。")
        return

    try:
        with sqlite3.connect(db_path) as conn:
            cursor = conn.cursor()

            cursor.execute(
                "SELECT id, website FROM passwords WHERE website = ?",
                (名前,)
            )
            結果 = cursor.fetchall()

            if not 結果:
                print("ウェブサイトが見つかりません。")
                return

            削除ID = None

            if len(結果) > 1:
                print(f"\n{名前} のパスワードが {len(結果)} 件見つかりました:")

                for i, 行 in enumerate(結果):
                    print(f"[{i + 1}] {行[1]}")

                選択 = input(
                    "削除するパスワードを選択してください。\n"
                    "全て削除する場合は「all」、キャンセルする場合は「0」 : "
                ).strip().lower()

                if 選択 == "all":
                    cursor.execute(
                        "DELETE FROM passwords WHERE website = ?",
                        (名前,)
                    )
                    conn.commit()
                    画面クリア()
                    print("削除に成功しました。")
                    return

                if not 選択.isdigit():
                    print("無効な選択です。")
                    return

                選択 = int(選択)

                if 選択 < 1 or 選択 > len(結果):
                    print("無効な選択です。")
                    return

                削除ID = 結果[選択 - 1][0]

            else:
                削除ID = 結果[0][0]

            cursor.execute("DELETE FROM passwords WHERE id = ?", (削除ID,))
            conn.commit()

    except Exception as 例外:
        print(f"エラー {例外}")
        return

    画面クリア()
    print("削除に成功しました。")


if __name__ == "__main__":
    削除()