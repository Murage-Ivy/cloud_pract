const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const multer = express('multer')
const upload = require('./routes/index')
require("dotenv").config()

const port = 4000

app.use(bodyParser.json())


app.use(upload)

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})