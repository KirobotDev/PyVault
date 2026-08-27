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
file_path = "key.txt"
def add_passwd() -> str:
    if os.path.exists(file_path) :
        with open("key.txt" , 'r') as file : 
            content = file.read() 
            key = content.strip()

    else :
        key = input("Enter your key please thanks... : ")
        with open("key.txt" , 'w') as file : 
            file.write(key) 
    sys()
    website = input("Enter the name of your website (e.g. github) : ")
    sys()
    add = input("Enter your password : ")
    sys()

    try:
        passwd = add

        fernet = Fernet(key.encode())

        encrypted = fernet.encrypt(passwd.encode())
        print(f"Encrypted password : {encrypted}")

        with open(f"./secret/{website}.txt", "a", encoding="utf-8") as f:
            f.write(f"{encrypted.decode()}\n")

        return passwd
    
    except Exception as e:
        print(f"Error {e}")
        return ""

if __name__ == "__main__":
    add_passwd()