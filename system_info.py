import os
import platform

def sys() -> int:
    current_platform = platform.system()

    if current_platform in {"Darwin", "Linux"}:
        return os.system("clear")

    if current_platform == "Windows":
        return os.system("cls")

    print("Sorry, your platform is not supported")
    return 1

if __name__ == "__main__":
    sys()
