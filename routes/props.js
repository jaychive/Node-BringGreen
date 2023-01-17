const express = require('express');
const router = express.Router();

const propsDB = require('../json/propsDB.json');
//localhost:8080/propsProxy/propsdb
router.get('/propsdb', function (req, res, next) {
  res.send(propsDB)
})

module.exports = router;