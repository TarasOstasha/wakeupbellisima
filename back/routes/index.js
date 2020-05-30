var express = require('express');
var router = express.Router();
const fs = require('fs').promises;
const User = require('../models/users');
// const cors = require('cors');
// const bodyParser = require('body-parser');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/portfolio-imgs', async (req, res) => {
  const portfolioImgsList = await fs.readdir('downloads/imgs');
  res.status(200).json(portfolioImgsList);
})

// register
router.post('/register', async (req, res) => {
  try {
    const userEmail = req.body.email;
    const user = await User.findOne({ email: userEmail }); // request to data base
    if (user) return res.json({ ok: false, message: 'this user already exist' });

    // create new user
    const new_user = new User({
      userName: req.body.name,
      email: req.body.email,
      password: req.body.password
    });
    new_user.save();
    res.json({ ok: true, message: 'new account has been created' });

    req.login(req.body, () => {
      res.json({ ok: true })
    })
  } catch (error) {
    console.log(error)
    res.sendStatus(500);
  }

})

// login
router.post('/login', async (req, res) => {
  const userEmail = req.body.email;
  const user = await User.findOne({ email: userEmail });
  console.log(user);
  if (!user) return res.json({ ok: false, message: 'his user not exist' });

  req.login(req.body, () => {
    res.json({ ok: true, user })
  })

});
// log out
router.get('/log-out', async (req, res) => {
  req.logout();
  res.json({ ok: true })
})

module.exports = router;
