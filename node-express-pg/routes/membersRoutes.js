//////// DEPENDENCIES, MODULES, CONFIGURATIONS ////////

const express = require('express')
const router = express.Router()

// const BeerModel = require('../models/BeerModel')



//////// ROUTE CONTROLLER FUNCTIONS ////////

router.get('/api/members', (req, res) => {
  res.send("hello not-aves")
})



//////// EXPORT MODULES ////////

module.exports = router








// END
