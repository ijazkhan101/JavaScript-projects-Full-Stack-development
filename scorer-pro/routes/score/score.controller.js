const express = require('express');
const router = express.Router();

// http://localhost:3000/score
router.get('/', function(req, res, next) {
  res.json({
    message :'score  controller page  '
  });
});

module.exports = router;
