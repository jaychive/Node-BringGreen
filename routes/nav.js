const express = require('express');
const router = express.Router();

const navDB = require('../json/navdb.json')

//localhost:8080/navProxy/navdb
router.get('/navdb', function (req, res, next) {
  res.send(navDB)
})

module.exports = router;