const express = require("express")
const router = express.Router()

const {uploadPost} = require("../controllers/uploadController")

router.post("/upload",uploadPost)

module.exports = router
