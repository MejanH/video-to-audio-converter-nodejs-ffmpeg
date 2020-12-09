# Convert any Videos(ffmpeg formats support) to mp3 Audio with Nodejs

**npm packages:**
- express
- multer(to upload files. official package from express I think)

### requiments
- Need to install ffmpeg on windows or your local machine also need to set ffmpeg to your command like runnine `ffmpeg` from cmd. te set on terminal go to `Environment Variables`. Select `Path` then click edit and add the folder location of `ffmpeg/bin`. For now, I edited my user `Path` variables.

## For Heroku
Need to add buildpacks for Nodejs and ffmpeg
after creating project go to **Setting**>**Add buildpack**
#### Warning next steps

make sure you add the ffmpeg buildpack first otherwise it will give your error. ffpmeg needs to be setup before nodejs just like reoping the terminal on your local machine for ffmpeg cmd.
- first add https://github.com/jonathanong/heroku-buildpack-ffmpeg-latest.git to the buildpack list
- Then select nodejs from the list
- So, there is two buildpack now.

Now, add the repo in heroku and automatic deploy to work with github push changes.
Then, select deploy branch

