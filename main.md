### 👋 Welcome to PyVault Ideas!

This file contains a few simple ideas to help contributors get started with the project. You can choose to complete one, two, or all of them in a single Pull Request! 

> [!NOTE]
> For all of these ideas, you are fully allowed to use AI to help you write code or translate!

---

### 💡 Idea 1: Fix typos and translate CLI prompts to English
Currently, the CLI prompts have some typos and mix English with French. To keep the project consistent and accessible to everyone, all prompts should be correctly written in English.

**Tasks:**
- [x] Go through the files in the `commands/` directory and `main.py`.
- [x] Correct any typos in the `input()` and `print()` statements.
- [x] Translate any remaining French prompts into English.

---

### 💡 Idea 2: Add missing requirements.txt file
The `README.md` instructs users to install dependencies by running `pip install -r requirements.txt`. However, this file is currently missing from the repository.

**Tasks:**
- [x] Create a `requirements.txt` file at the root of the project.
- [x] Add the `cryptography` package to the file.
- [x] Verify that running `pip install -r requirements.txt` works successfully.

---

### 💡 Idea 3: Automatically load existing key on startup
We want to improve the user experience by automatically loading the key if `key.txt` already exists in the folder.

**Tasks:**
- [x] Check if `key.txt` exists when the application starts or when running commands.
- [x] If it exists, read the key and use it automatically so the user doesn't have to type it again.
- [x] If it doesn't exist, keep the current behavior (ask the user or prompt to generate one).
- [x] Update the commands (`add.py`, `decrypt.py`) to use this automatically loaded key.

---

### 💡 Idea 4: Add Japanese Codebase Support
To put a codebase in Japanese, we need to create a proper structure for it.

**Tasks:**
- [ ] Create another folder specifically for the Japanese codebase (e.g., `japanese/`).
- [ ] Move or duplicate necessary codebase files into this new folder.
- [ ] Ensure the project can cleanly support multiple codebase languages.

---

### 💡 Idea 5: Add macOS support
Make sure the application runs correctly on macOS without any errors, especially regarding system commands.

**Tasks:**
- [ ] Test the application on macOS.
- [ ] Update `system_info.py` or other files to handle macOS properly.

---

### 💡 Idea 6: Create our own encryption algorithm
Instead of only using the `cryptography` library, implement a custom encryption algorithm for learning and extended features.

**Tasks:**
- [ ] Design and implement a new custom encryption algorithm.
- [ ] Integrate it into the codebase as an option alongside `Fernet`.
