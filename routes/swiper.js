const express = require('express');
const router = express.Router();

const swiperinfo = require('../json/swiperinfo.json');

//localhost:8080/swiperProxy/swiperinfo
router.get('/swiperinfo', function (req, res, next) {
  res.send(swiperinfo)
})

module.exports = router;