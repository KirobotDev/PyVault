import ctypes
import base64
import sys

_CRYPTPROTECT_UI_FORBIDDEN = 0x1

_crypt32 = ctypes.windll.crypt32
_kernel32 = ctypes.windll.kernel32


class _DATA_BLOB(ctypes.Structure):
    _fields_ = [
        ("cbData", ctypes.c_ulong),
        ("pbData", ctypes.POINTER(ctypes.c_char)),
    ]


def protect(secret: str) -> str:
    if sys.platform != "win32":
        raise OSError("DPAPI is only available on Windows.")
    raw = secret.encode("utf-8")
    src = _DATA_BLOB(len(raw), ctypes.cast(
        ctypes.create_string_buffer(raw, len(raw)),
        ctypes.POINTER(ctypes.c_char)))
    out = _DATA_BLOB()
    if not _crypt32.CryptProtectData(ctypes.byref(src), None, None, None, None,
                                     _CRYPTPROTECT_UI_FORBIDDEN, ctypes.byref(out)):
        raise ctypes.WinError(ctypes.get_last_error())
    try:
        data = ctypes.string_at(out.pbData, out.cbData)
        return base64.b64encode(data).decode("ascii")
    finally:
        _kernel32.LocalFree(out.pbData)


def unprotect(blob_b64: str) -> str:
    if sys.platform != "win32":
        raise OSError("DPAPI is only available on Windows.")
    raw = base64.b64decode(blob_b64)
    src = _DATA_BLOB(len(raw), ctypes.cast(
        ctypes.create_string_buffer(raw, len(raw)),
        ctypes.POINTER(ctypes.c_char)))
    out = _DATA_BLOB()
    if not _crypt32.CryptUnprotectData(ctypes.byref(src), None, None, None, None,
                                       _CRYPTPROTECT_UI_FORBIDDEN, ctypes.byref(out)):
        raise ctypes.WinError(ctypes.get_last_error())
    try:
        data = ctypes.string_at(out.pbData, out.cbData)
        return data.decode("utf-8")
    finally:
        _kernel32.LocalFree(out.pbData)
