# bash_like_shell
In this we are having differnet bash command to be run over a node server using :
node shell.js

The commands includes:
**cd <directory_name>** - Should work same as bash shell.
**pwd** - Prints current working directory.
**ls <directory_name> **- Should work same as bash shell. Support for flags is not required.
**<path_to_binary> <args>**- When path to a binary is provided, that binary should be spawned as a child process. The binary must receive all the arguments passed as space separated like arg1 arg2 ….
**fg <pid> **- Brings the background process with process id <pid> to foreground.
**exit** - Closes the shell.

All the command are included in shell.js
We could use a set of command or either a single command from the js file.
