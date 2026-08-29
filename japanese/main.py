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
システム関数をインポートします
"""

from system_info import 画面クリア

"""
すべてのコマンドをインポートします ;-;
"""

from commands.generate_key import 鍵生成
from commands.add import パスワード追加
from commands.list import 一覧表示
from commands.decrypt import 復号化
from commands.export import エクスポート
from commands.delete import 削除
from commands.search import 検索

"""
すべての単体テストをインポートします
"""

from tests.add_test import パスワード追加 as テスト用パスワード追加
from tests.decrypt_test import 復号化 as テスト用復号化

def 単体テスト実行() -> str:
    テスト用パスワード追加()
    テスト用復号化()

def メイン() -> str | int:

    単体テスト実行()

    while True:
        入力 = input("""
        ▄▄▄▄▄▄     ▄▄▄                 ▄▄     
       █▀██▀▀▀█▄  █▀██  ██▀▀           ██ █▄ 
         ██▄▄▄█▀    ██  ██             ██▄██▄
         ██▀▀▀██ ██ ██  ██ ▄▀▀█▄ ██ ██ ██ ██ 
       ▄ ██   ██▄██ ██▄ ██ ▄█▀██ ██ ██ ██ ██ 
       ▀██▀  ▄▄▀██▀  ▀███▀▄▀█▄██▄▀██▀█▄██▄██ 
                ██                           
                ▀▀▀           

S. [プロジェクトにスターを付ける]    0. [鍵の生成（必須）]     Q. [終了]
        
        1. [パスワード追加]    4. [エクスポート（Zip）]
        2. [一覧表示]          5. [パスワード削除]
        3. [パスワード復号]    6. [ウェブサイト検索]

        選択 : """)
        画面クリア()


        if 入力 == "0":
            鍵生成()
            time.sleep(2)
            画面クリア()

        elif 入力 == "1":
            パスワード追加()
            time.sleep(2)
            画面クリア()
            
        elif 入力 == "2":
            一覧表示()
            time.sleep(2)
            画面クリア()

        elif 入力 == "3":
            復号化()
            time.sleep(2)
            画面クリア()

        elif 入力 == "4":
            エクスポート()
            time.sleep(2)
            画面クリア()

        elif 入力 == "5":
            削除()
            time.sleep(2)
            画面クリア()

        elif 入力 == "6":
            検索()
            time.sleep(2)
            画面クリア()

        elif 入力.lower() == "s":
            webbrowser.open_new_tab("https://github.com/KirobotDev/PyVault")
            画面クリア()

        elif 入力.lower() == "q":
            break

        else:
            print("その選択肢は存在しません。コードを確認するには https://github.com/KirobotDev/PyVault を参照するか、変更を提案するには https://github.com/KirobotDev/PyVault/issues をご覧ください。")
            time.sleep(2)

if __name__ == "__main__":
    メイン()