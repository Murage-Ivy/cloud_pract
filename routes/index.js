const express = require('express');
const {
    Router
} = require('express');
const app = Router();
const multer = require('multer');
const {
    uploadFile,
    getFiles
} = require('../controllers/index')


const storage = multer.memoryStorage()

const upload = multer({
    storage

})

app.get('/', (_, res) => {
    res.send("Welcome to the aws file uploader")
})

app.post('/upload', upload.array("file"), async (req, res) => {

    const file = req.files[0]

    console.log(file)

    if (!file) {
        return res.status(400).send("No file uploaded")
    }

    try {


        const result = await uploadFile(file)
        res.status(200).json({
            status: "success",
            result
        })
    } catch (err) {
        res.status(500).json({
            errors: {
                error: 'Files not found',
                err: err.message
            }
        })

    }

})


app.get('/files', (req, res) => {
    const files = getFiles()
    res.status(200).json({
        status: "success",
        files
    })
})



module.exports = app;