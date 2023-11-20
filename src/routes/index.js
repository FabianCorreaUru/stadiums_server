const express = require('express')
const router = express.Router()
const indexController = require("../controllers/indexController")
const continentController = require("../controllers/continentController")
const countryController = require("../controllers/countryController")

router.get("/", indexController.getStatus)
router.get("/continent/:continent", continentController.getCountries)
router.get("/country/:country", countryController.getStadiums)

module.exports = router