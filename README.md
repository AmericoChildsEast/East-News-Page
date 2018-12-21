# East News Page

<h2>Set-Up</h2>
<p>
  <h3>Step 1: Downloads</h3>
  Install Git: https://git-scm.com/downloads <br>
  Install Visual Studio Code: https://code.visualstudio.com/ <br>
  Install Node.Js: https://nodejs.org/en/ <br>
  Install Postman: https://www.getpostman.com/apps
  <h3>Step 2: Git Set-Up/Tutorial</h3>
  
  Using Git: <br>
  Video: https://www.youtube.com/watch?v=HVsySz-h9r4 <br>

  Basic Commands:<br>

     git init
     git remote add origin git@gitlab.com:madison-east-programming/east-news-page.git
     git pull origin [branch]

     git branch 
     git branch [name]
     git checkout [branch]

     git add -A
     git commit -m "description"
     git push origin [branch]
  
  NEVER PUSH TO THE 'MASTER' BRANCH!!!

  Obtaining SSH key:
  1) https://www.laptopmag.com/articles/use-bash-shell-windows-10
  2) https://docs.microsoft.com/en-us/windows/wsl/install-win10
  3) Paste: ssh-keygen -t ed25519 -C "email@example.com" [into Git Bash]
  4) Paste: cat ~/.ssh/id_ed25519.pub
  5) Copy the SSH key then paste it into "SSH Keys" into settings on GitLab
  <h3>Step 3: Development </h3>
  1) Type "npm run server" to run backend & frontend
</p>
