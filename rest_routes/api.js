var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/name', function(req, res) {
  res.json({
    name: 'Donald Duck'
  });
});

module.exports = router;
