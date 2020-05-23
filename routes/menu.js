let express = require('express');
let router = express.Router();

/* GET users listing. */
router.get('/:menu', function(req, res, next) {
  res.render('menu', { params: req.params});
});

module.exports = router;
