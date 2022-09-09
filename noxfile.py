"""
Automation tasks with nox.
"""

import nox

# constants and variables
LOCAL_REQUIREMENTS = "./requirements/local.txt"
SOURCE_CODE = "madalinpopa"
TEST_UNIT_ARGS = ["-v", "0", "--force-color", "--keepdb", "--failfast"]
TEST_ARGS = ["-v", "0", "--force-color", "--failfast"]

# nox options
nox.options.sessions = ["format", "lint"]
nox.options.reuse_existing_virtualenvs = False
nox.options.default_venv_backend = "none"

# Unit tests base commands
cmd_python_test = ["python", "manage.py", "test"]
cmd_test_args = ["-v", "0", "--force-color", "--keepdb", "--failfast"]

#
# FORMAT AND LINTING CODE TASKS
# ----------------------------------------------------
@nox.session(name="format")
def format_code(session):
    """Task to format all files"""
    session.run("isort", ".")
    session.run("black", ".")


@nox.session(name="lint")
def lint_code(session):
    """This taks is used to run linting on code"""
    session.run(
        "pylint",
        "-j",
        "0",
        "-f",
        "colorized",
        SOURCE_CODE,
    )


#
# RUNNING TESTS COMMANDS
# ----------------------------------------------------
@nox.session(name="test-unit")
def test_unit(session):
    """Run unit tests"""
    session.run(*cmd_python_test, *cmd_test_args)
