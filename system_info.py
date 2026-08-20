import platform
import os

def sys() -> str:
    if platform.system() == "Linux":
        os.system("clear")
    elif platform.system() == "Windows":
        os.system("cls")
    else:
        print("Sorry your platform is not supported")
if __name__ == "__main__":
    sys()