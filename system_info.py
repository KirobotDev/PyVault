import os
import platform

def sys() -> str:
    if platform.system() == "Darwin" or "Linux":
        os.system("clear")

    elif platform.system() == "Windows":
        os.system("cls")

    else:
        print("Sorry, your platform is not supported")

if __name__ == "__main__":
    sys()