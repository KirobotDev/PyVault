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

"""
- すべての情報はテスト用です

- 実際の鍵とパスワードは使わないでください

- ありがとうございました。
"""


def 復号化() -> str | int | bool:
    画面クリア()
    鍵 = "Hli06nYKVJ2jVTIfgOko9RCgpRv6h1KsJpQGKlUJ_14="
    暗号器 = Fernet(鍵)
    画面クリア()
    ファイル名 = "test_unitary.txt"
    画面クリア()
    try:
        with open(f"./test_unitary/{ファイル名}", "rb") as ファイル:
            内容 = ファイル.read()

        復号パスワード = 暗号器.decrypt(内容)
        print(f"あなたのパスワードは [ {復号パスワード.decode()} ] です")
        画面クリア()
        return 復号パスワード.decode()
    except Exception as 例外:
        print(f"エラー {例外}")
        return ""

if __name__ == "__main__":
    復号化()