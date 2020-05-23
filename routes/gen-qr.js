let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('gen-qr', { title: 'Generate QR' });
});

module.exports = router;
