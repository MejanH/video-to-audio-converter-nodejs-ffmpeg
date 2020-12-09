const express = require("express")
const multer = require("multer")
const fs = require("fs")
const path = require("path")
const { exec } = require("child_process")
const { stdout, stderr } = require("process")

const app = express()

app.use(express.static("public"))

const PORT = process.env.PORT || 5000

const dir = "public"
const subDir = "public/uploads"

if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir)
    // why both are same? because subDir is "public/uploads"
    fs.mkdirSync(subDir)
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, subDir)
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({ storage: storage })

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

// single("file") => "file" came from name attribute of the html input form
app.post("/convert", upload.single("file"), (req, res) => {
    if (req.file) {
        console.log(req.file.path);

        const output = Date.now() + "-" + "convertedAudio.mp3"

        exec(`ffmpeg -i ${req.file.path} ${output}`, (error, stdout, stderr) => {
            if (error) {
                console.log(`Convert Error: ${error}`);
                return
            } else {
                console.log("File is converted");
                res.download(output, (error) => {
                    if (error) {
                        throw error
                    } else {
                        fs.unlinkSync(req.file.path)
                        fs.unlinkSync(output)
                    }
                })
            }
        })
    }
})

app.listen(PORT, () => {
    console.log("Server: http://localhost:5000");
})