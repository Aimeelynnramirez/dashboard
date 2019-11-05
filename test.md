# DVP1 / Project & Portfolio 1

## DEV119-O 01 
## Project and Portfolio I: Development 

* **dvp1-1911-alramirez1**
* **Aimee Ramirez**
* **11/10/19**

**dvp1-1911-alramirez1/activities/research/Ramirez_Aimee_VersionControl.md**

This research paper summarizes the time and effort looking into these topics about these matters outlined in this markdown. 

Repository Link: [dvp1-1911-alramirez1](https://github.com/ePortfolios/dvp1-1911-alramirez1)


## Topic: Terminal
Professional developers use Terminal daily. It's essential to understand some fundamental commands to use the application. Here's what I have learned...  

*I've learned that all different areas/terminals that I run commands can differentiate by environments to what type of window is being utilized.*
For example:
- terminal = text input/output environment.
- console = physical terminal.
- shell - command line interpreter.

**1. Using Terminal, there are essential Linux commands I must know.**
 

**The last bullet provides an example**.
# TODO

* **[ clear ]**: Clear the Screen 
* **[ pwd ]**: Print the "Working Directory"
* **[ ls ]**: List files and folders
* **[ ls -a ]**: List files and folders, including invisible files
* **[ ls -la ]**: List all files and folders, in human readable form
* **[ cd ]**: Change directory
* **[ cd .. | cd / ]**: Change directory, go to root
* **[ cd <name_of_dir> | cd ~ ]**: Change directory, go up one folder level
* **[ cd ./<first_name_of_dir>/<second_name_of_dir> ]**: Change directory, go up two folder levels
* **cd ~/Desktop/**: Change directory to my desktop! 


**2. After Trying Linux Commands in Terminal, I learned...**
* cd ~ (this doesn't work for me.) but I know it works for MacBooks as a Windows User.

**Folder Drop:** 
* Dragging and dropping the folder to the Linux terminal shows the path of the folder structure. That if to "cd" then drag and drop the folder it is to go to the direct path of where the folder structure. 
 
# TODO
Repository Link is here: [dvp1-1911-alramirez1](https://github.com/ePortfolios/dvp1-1911-alramirez1)

**1.2 Using Terminal, there are essential Powershell commands I know.**

*PowerShell is a task-based command-line tool and a scripting language. It is available for most major operating systems such as macOS, Linux and Windows. PowerShell has specific commands for tasks on the system which are known as cmdlets. PowerShell also provides aliases for common Unix commands.*


* **[ Clear-Host ]**: Clear the Screen 
* **[ Get-Location ]**: Print the "Working Directory"
* **[ Get-ChildItem ]**: List files and folders
* **[ Get-ChildItem . -Force ]**: List files and folders, including invisible files
* **[ Get-ChildItem  ]**: List all files and folders, in human readable form
* **[ Set-Location ]**: Change directory
* **[ Set-Location C:\ ]**: Change directory, go to root
* **[ Set-Location -Path C:\\<path_to>\\<directory_folder>\\<first_name_of_directory> ]**: Change directory, go up one folder level
* **[  Set-Location -Path C:\\<path_to>\\<directory_folder>\\<first_name_of_directory>\\<second_name_of_directory> ]**: Change directory, go up two folder levels
 


**2. After Trying Powershell Commands in Terminal, I learned...**
# TODO

**Folder Drop:** 
* When dragging and dropping a folder in the Powershell terminal, it does not show the file path to the directory of the repository that was pulled into the terminal. 
 

[PowerShell Command Reference](https://docs.microsoft.com/en-us/powershell/?view=powershell-6)



## Topic: Version Control & Git
Version control, also known as revision control, records changes to a file or set of files over time so that you can recall specific versions later. In this class, we are learning Git. Here's what I have learned. 

**1. There are three types of version control.**
**a. Local version control system.**

####  Local
> This is the method that most people implement. It involves copying files from one  
> directory into another or simply saving a file with a new version number. 
> This would be similar to the Real World Example described above. While this approach  
> is simple, it leaves the door open for errors.

   
**b. Centralized version control system.**
   ![alt text](https://i.imgur.com/Pd0zzKL.jpg "CVCS example")
#### Centralized (CVCS)

> This method is utilized when developers need to collaborate on a single server. A  
> developer simply checks out the latest piece of code on which work is to be  
> completed.

> The advantage to this is that everyone knows what everyone else is doing based on the code that has been checked out and by whom.  
> Administrators control who can do what on a project and it’s easier to administer a single server than multiple local drives.

> There are disadvantages to this approach as well. The first was alluded to above, a single server. If that server goes down, no one 
> can work on the project nor can anything be saved. If that server crashes and proper backups do not exist, everything is lost, the  
> entire history, except the snippets that people may happen to have on their local machine.
   
**c. Distributed version control system.**
   ![alt text](https://i.imgur.com/Z8qcwXh.jpg "DVCS example")
 
####  Distributed (DVCS)

> This method allows the developer to make an exact copy of the repository and store it on the local drive.

> The main advantage to this is that if the server dies, each collaborator has an exact copy of the project, which can be utilized as a  > backup to restore the server.

> Another advantage is that most DVCSs can handle several remote repositories simultaneously; 
> this allows developers to collaborate with multiple groups in different manners.
> Thus, hierarchical workflows are possible.





**2. Using Terminal, there are essential Git commands I must know.**
 

* **[ git clone ]**: Clone a repository
* **[ git config --global user.name “[firstname lastname]” ]**: Set-up a global user name
* **[ git config --global user.email “[valid-email]” ]**: Set-up a global email address (to match my GitHub account eMail)
* **[ git status ]**: Show modified files
* **[ git status ]**: Add modified files to the next commit
* **[ git commit -m “[descriptive message]” ]**: Make a commit with a new message
* **[ git log ]**: Show my commit history
* **[ git help ]**: This command will bring up Git's help screen in Terminal!
    


[Github Command Reference](https://education.github.com/git-cheat-sheet-education.pdf) 



**3. Authenticating with GitHub from Git.**

*HTTPS is the the correct way to connect to GitHub in Project & Portfolio. I would "git init" the directory then I would "git status" to see the updated files. I would each file to be committed. Example: "git add <files_to_be_committed>". I would then "git checkout" the branch to make sure it's in the right branch. I would "git remote -v" then check the remote origin. Then I would "git commit -m "a meaningful message", then "git push origin <branch_name>".* 


# References

Github Education, Git Cheat Sheet. Retrieved from [https://education.github.com/git-cheat-sheet-education.pdf](https://education.github.com/git-cheat-sheet-education.pdf)

Microsoft Docs, (October 2019). PowerShell Documentation. Retrieved from
[https://docs.microsoft.com/en-us/powershell/?view=powershell-6]https://docs.microsoft.com/en-us/powershell/?view=powershell-6)

