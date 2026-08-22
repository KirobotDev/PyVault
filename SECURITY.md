# Security Policy

## Supported Versions

PyVault is currently in early development. The current version is an experimental prototype and is **not intended for production use**. 

> ⚠️ **Do not use PyVault**

The current encryption system relies on locally stored Fernet keys and does not yet have a robust key management system or master password protection.

| Version | Supported          |
| ------- | ------------------ |
| 0.2.x   | ❌ (Experimental)  |
| < 0.2.0 | ❌                 |

## Reporting a Vulnerability

If you discover a security vulnerability within PyVault, please do not disclose it publicly.

Even though the project is an experimental learning project, practicing responsible disclosure is appreciated. You can report security vulnerabilities by:

1. Opening a draft security advisory if GitHub Security Advisories are enabled for the repository.
2. Contacting the author directly via their GitHub profile (https://github.com/KirobotDev).

Please include the following information in your report:
- A description of the vulnerability.
- Steps to reproduce the issue.
- (Optional) Possible solutions or mitigations.

You should receive a response acknowledging the receipt of the vulnerability within a reasonable timeframe.

## Security Roadmap

As part of the project's learning objectives, security is a major focus for upcoming phases. The following security features are planned:
- Master password protection
- Secure key derivation and management
- Vault locking mechanism
- Protection against brute-force attacks
- Formal threat modeling

For more details, please see the Roadmap in the `README.md`.
