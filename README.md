# Convert Mp4 Videos to mp3 Audio with Nodejs

**npm packages:**
- express
- multer(to upload files. official package from express I think)

### requiments
- Need to install ffmpeg on windows or your local machine also need to set ffmpeg to your command like runnine `ffmpeg` from cmd.

## For Heroku
Need to add buildpacks for Nodejs and ffmpeg
after creating project go to **Setting**>**Add buildpack**
- first select nodejs from the list
- Then add https://github.com/jonathanong/heroku-buildpack-ffmpeg-latest.git to the buildpack list
- So, there is two buildpack now.

Now, add the repo in heroku and automatic deploy to work with github push changes.
Then, select deploy branch

