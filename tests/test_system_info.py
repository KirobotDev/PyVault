import unittest
from unittest.mock import patch

import system_info


class SystemInfoTest(unittest.TestCase):
    def test_clear_uses_clear_on_macos(self) -> None:
        with patch("system_info.platform.system", return_value="Darwin"), patch(
            "system_info.os.system", return_value=0
        ) as mocked_system:
            result = system_info.sys()

        self.assertEqual(result, 0)
        mocked_system.assert_called_once_with("clear")

    def test_clear_uses_cls_on_windows(self) -> None:
        with patch("system_info.platform.system", return_value="Windows"), patch(
            "system_info.os.system", return_value=0
        ) as mocked_system:
            result = system_info.sys()

        self.assertEqual(result, 0)
        mocked_system.assert_called_once_with("cls")

    def test_clear_reports_unsupported_platform(self) -> None:
        with patch("system_info.platform.system", return_value="FreeBSD"), patch(
            "system_info.os.system"
        ) as mocked_system, patch("builtins.print") as mocked_print:
            result = system_info.sys()

        self.assertEqual(result, 1)
        mocked_system.assert_not_called()
        mocked_print.assert_called_once_with("Sorry, your platform is not supported")


if __name__ == "__main__":
    unittest.main()
