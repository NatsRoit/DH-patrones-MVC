const express = require("express");
// const path = require('path');
const mainController = require("../controllers/mainController")

const router = express.Router();

router.get ('/', mainController.index);
router.get ('/about', mainController.about);

module.exports = router;
