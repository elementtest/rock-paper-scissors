#/bin/bash
#adds all files in folder to github elementtest7@gmail.com
git add *
read -p "git commit description: " desc
git commit -m "$desc"
#use git push origin branch-name instead of git push origin maijn 
#used to test new features on new branch and then merge to main trunk 
#main trunk is called main
git push origin rps-ui

