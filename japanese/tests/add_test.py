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

def パスワード追加() -> str:

    """
   - すべての情報はテスト用です

   - 実際の鍵とパスワードは使わないでください

   - ありがとうございました。
    """

    鍵 = "Hli06nYKVJ2jVTIfgOko9RCgpRv6h1KsJpQGKlUJ_14="
    サイト名 = "test_unitary"
    追加 = "password"

    try:
        パスワード = 追加

        暗号器 = Fernet(鍵.encode())

        暗号文 = 暗号器.encrypt(パスワード.encode())

        with open(f"./test_unitary/{サイト名}.txt", "a", encoding="utf-8") as ファイル:
            ファイル.write(f"{暗号文.decode()}\n")
        return パスワード

    except Exception as 例外:
        print(f"エラー {例外}")
        return ""

if __name__ == "__main__":
    パスワード追加()