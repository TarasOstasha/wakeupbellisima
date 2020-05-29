var express = require('express');
var router = express.Router();
const fs = require('fs').promises;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/portfolio-imgs', async (req, res) => {
  const portfolioImgsList = await fs.readdir('downloads/imgs');
  res.status(200).json(portfolioImgsList);
})

module.exports = router;
