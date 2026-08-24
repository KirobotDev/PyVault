# 🔐 PyVault

**PyVault** is a local password and secrets manager written in Python.

The goal of this project is to build a simple, private and secure way to store sensitive information locally while learning how encryption, databases and application architecture work.

> ⚠️ **PyVault is currently under development.**

---

## ✨ Features

### Currently available

* 🔑 Generate Fernet encryption keys
* 🔐 Encrypt and store passwords using Fernet
* 💾 Store each password in a dedicated file per website
* 🔓 Decrypt and retrieve stored passwords
* 📋 List all saved entries
* 🔎 Search stored passwords
* 🗑️ Delete passwords
* 📤 Export passwords
* 🖥️ Simple CLI interface
* 🧪 Unit tests

### Planned

* 🗄️ SQLite database
* 🔑 Master password
* 🔒 Vault locking
* 🌐 Local API
* 🖥️ Web interface

---

## 🧠 Why PyVault?

I wanted to create a project that was more than a simple Python script.

PyVault is also a way for me to learn how different parts of a real application work together:

* Python
* Cryptography
* Databases
* APIs
* Authentication
* Security
* Software architecture

Instead of only following tutorials, I want to build the project myself, encounter problems, research solutions and document the entire process.

---

## 🏗️ Architecture

The architecture below shows both the **current project** and the features planned for the future.

```mermaid
flowchart TD
    User["👤 User"]

    PyVault["🔐 PyVault"]

    CLI["🖥️ CLI<br/>CURRENT"]

    GenerateKey["🔑 Generate Key<br/>CURRENT"]
    AddPassword["🔐 Add Password<br/>CURRENT"]
    ListPasswords["📋 List Passwords<br/>CURRENT"]
    DecryptPassword["🔓 Decrypt Password<br/>CURRENT"]

    Fernet["🔒 Fernet Encryption<br/>CURRENT"]
    KeyFile["📄 key.txt<br/>CURRENT"]
    SecretFolder["📁 secret/<br/>CURRENT"]

    Search["🔎 Search Passwords<br/>CURRENT"]
    Delete["🗑️ Delete Password<br/>CURRENT"]
    Export["📤 Export Passwords<br/>CURRENT"]
    Tests["🧪 Unit Tests<br/>CURRENT"]

    MasterPassword["🔑 Master Password<br/>PLANNED"]
    Vault["🔐 Vault System<br/>PLANNED"]
    SQLite["🗄️ SQLite Database<br/>PLANNED"]

    API["🌐 Local API<br/>PLANNED"]
    FastAPI["⚡ FastAPI<br/>PLANNED"]

    Web["🖥️ Web Interface<br/>PLANNED"]

    User --> PyVault

    PyVault --> CLI

    CLI --> GenerateKey
    CLI --> AddPassword
    CLI --> ListPasswords
    CLI --> DecryptPassword

    GenerateKey --> Fernet
    GenerateKey --> KeyFile

    AddPassword --> Fernet
    Fernet --> SecretFolder

    DecryptPassword --> SecretFolder
    ListPasswords --> SecretFolder

    CLI --> Search
    CLI --> Delete
    CLI --> Export

    Search -.-> SQLite
    Delete -.-> SQLite

    MasterPassword -.-> Vault
    Vault -.-> SQLite

    API -.-> FastAPI
    FastAPI -.-> Vault

    Web -.-> API

    Tests -.-> PyVault
```

**CURRENT** = already implemented

**PLANNED** = planned for a future version

---

## 📁 Current Project Structure

```text
PyVault/
│
├── commands/
│   ├── add.py
│   ├── decrypt.py
│   ├── delete.py
│   ├── export.py
│   ├── generate_key.py
│   ├── list.py
│   └── search.py
│
├── secret/              ← stores encrypted password files
│
├── tests/                ← unit tests
│
├── main.py
├── system_info.py
├── key.txt
├── .gitignore
├── LICENSE
└── README.md
```

---

## 🔐 Current Encryption System

PyVault currently uses **Fernet** from the `cryptography` library.

A key is generated with:

```python
key = Fernet.generate_key()
```

The key is currently stored locally in:

```text
key.txt
```

When adding a password, PyVault encrypts it before storing it:

```python
fernet = Fernet(key.encode())

encrypted = fernet.encrypt(passwd.encode())
```

The encrypted password is then stored in a dedicated file inside the `secret/` folder, one file per website:

```text
secret/
└── github.txt
```

Example content of `secret/github.txt`:

```text
gAAAAAB...
```

The password itself is **not stored directly** in the file.

> ⚠️ This is an early prototype. The current key management system is not considered secure enough for production use.

---

## 🚀 Installation

Clone the repository:

```bash
git clone https://github.com/KirobotDev/PyVault.git
cd PyVault
```

Create a virtual environment:

### Windows

```bash
python -m venv .venv
.venv\Scripts\activate
```

### Linux / macOS

```bash
python3 -m venv .venv
source .venv/bin/activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

---

## ▶️ Usage

Start PyVault:

```bash
python main.py
```

You will see:

```text
S. [Stars Project]      0. [Generate Key (Obliged)]     Q. [Leave]
        
        1. [Add Password]   4. [Export (Zipfiles)]
        2. [List Pswd]      5. [Delete Passwd]
        3. [Decrypt Pswd]   6. [Search Website]

        Choices :
```

### Generate a key

Choose:

```text
0
```

PyVault will generate a Fernet key and save it to:

```text
key.txt
```

### Add a password

Choose:

```text
1
```

PyVault will ask for:

```text
Enter yout key please thanks... :
Enter name your website Example (github) :
Enter your password :
```

The password will be encrypted and stored in:

```text
secret/<website>.txt
```

### List saved entries

Choose:

```text
2
```

PyVault will display all files stored in the `secret/` folder (one per website).

### Decrypt a password

Choose:

```text
3
```

PyVault will ask for:

```text
Enter your key :
Enter the file name example (github.txt) :
```

It will then display:

```text
Your Password is [ your_password_here ]
```

---

## 🧪 Running Tests

Unit tests are available in the `tests/` folder.

```bash
python -m unittest discover tests
```

---

## 🛠️ Roadmap

### Phase 1 — Prototype

* [x] Generate Fernet key
* [x] Save key locally
* [x] Encrypt passwords
* [x] Save encrypted passwords (one file per website in `secret/`)
* [x] Store website information
* [x] Basic CLI
* [x] Decrypt passwords
* [x] List saved entries

### Phase 2 — Vault

* [x] Search passwords
* [x] Delete passwords
* [x] Export passwords
* [ ] Load existing key automatically
* [ ] Better data structure

### Phase 3 — Security

* [ ] Master password
* [ ] Better key management
* [ ] Vault locking
* [ ] Failed attempt protection
* [x] Security tests
* [ ] Threat model

### Phase 4 — Database

* [ ] SQLite
* [ ] Database models
* [ ] Encrypted database fields
* [ ] Data validation
* [ ] Database migrations

### Phase 5 — API

* [ ] Local API
* [ ] FastAPI
* [ ] Authentication
* [ ] API documentation

### Phase 6 — Interface

* [ ] Web interface
* [ ] Vault dashboard
* [ ] Password manager UI
* [ ] API integration

### Phase 7 — Open Source

* [ ] Complete documentation
* [x] Automated tests
* [ ] CI/CD
* [ ] Security review
* [ ] PyPI package

---

## 📚 Development Story

PyVault isn't only a software project.

I also want to document the process of building it.

The documentation will cover:

```text
Idea
  ↓
First prototype
  ↓
Encryption
  ↓
Problems
  ↓
Research
  ↓
Solutions
  ↓
Security
  ↓
Testing
  ↓
Final application
```

The objective is to show what I learned, what went wrong and how the project evolved over time.

---

## 🧪 Status

**Current version:** `0.2.0-dev`

PyVault is currently an experimental project.

The project is actively being developed and its architecture may change significantly.

---

## 🤝 Contributing

Contributions, suggestions and bug reports are welcome.

If you find a problem, feel free to open an issue.

For larger changes, please open an issue first to discuss the idea.

---

## 📄 License

PyVault is released under the **MIT License**.

See [`LICENSE`](LICENSE) for more information.

---

## 👤 Author

**xql**

GitHub: https://github.com/KirobotDev

---

> Built with Python 🐍
>
> Learning by building.