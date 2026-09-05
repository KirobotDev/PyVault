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
ファイルパス = "key.txt"
def パスワード追加() -> str:
    if os.path.exists(ファイルパス) :
        with open("key.txt" , 'r') as ファイル : 
            内容 = ファイル.read() 
            鍵 = 内容.strip()

    else :
        鍵 = input("鍵を入力してください、お願いします… : ")
        with open("key.txt" , 'w') as ファイル : 
            ファイル.write(鍵) 
    画面クリア()
    サイト名 = input("ウェブサイトの名前を入力してください（例：github） : ")
    画面クリア()
    追加 = input("パスワードを入力してください : ")
    画面クリア()

    try:
        パスワード = 追加

        暗号器 = Fernet(鍵.encode())

        暗号文 = 暗号器.encrypt(パスワード.encode())
        print(f"暗号化されたパスワード : {暗号文}")

        os.makedirs("./secret", exist_ok=True)
        with open(f"./secret/{サイト名}.txt", "a", encoding="utf-8") as ファイル:
            ファイル.write(f"{暗号文.decode()}\n")

        return パスワード
    
    except Exception as 例外:
        print(f"エラー {例外}")
        return ""

if __name__ == "__main__":
    パスワード追加()