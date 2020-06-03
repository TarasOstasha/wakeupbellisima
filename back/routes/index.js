var express = require('express');
var router = express.Router();
const fsFile = require('fs').promises;
const fs = require('fs');

const User = require('../models/users');
//var cors = require('cors');
//let portfolioImgsList;

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/portfolio-imgs', async (req, res) => {
  //const portfolioImgsList = await fs.readdir('downloads/imgs');
  //const portfolioImgsList = await fs.readFile('downloads/imgs/imgs.json', 'UTF-8');
  // write end send data to the front end
  const portfolioImgsList = await fsFile.readFile('downloads/imgs/imgs2.json', 'UTF-8');
  res.status(200).json(JSON.parse(portfolioImgsList));
})


router.post('/add-new-file-to-json', async(req,res) => {
  const item = { url: req.body.fileName }
  addNewItem(item);
  res.json({ ok : true });
})
async function addNewItem(item) {
  const portfolioImgsListJson = await fsFile.readFile('downloads/imgs/imgs2.json', 'UTF-8');
  const portfolioImgsListArr = JSON.parse(portfolioImgsListJson);
  portfolioImgsListArr.push(item);
  const newPortfolioImgsListJson = JSON.stringify(portfolioImgsListArr);
  await fs.writeFile('downloads/imgs/imgs2.json', newPortfolioImgsListJson);
}

function createJson() {
  const dir = 'downloads/imgs/';
  let myImgs = [];
  const files = fs.readdirSync(dir)
  for (file of files) {
    let objJson = {};
    objJson.url = file;
    myImgs.push(objJson);
    const result = JSON.stringify(myImgs);
    fs.writeFile('downloads/imgs/imgs2.json', result, (err) => {
      if (err) throw err;
      console.log('Saved!');
    });
  }
}

router.get('/deleteItem', async (req, res) => {
  //console.log(req.body, 'delete')
  const delited = req.body;
  // const newPortfolioImgsList = await fs.writeFile('downloads/imgs/imgs2.json', 'hello', function(err,data) {
  //   if (err) {
  //     return console.log(err);
  //   }
  //   console.log(data);
  // });
  fs.writeFile('downloads/imgs/imgs2.json', delited, function (err) {
    if (err) return console.log(err);
    console.log('Hello World > helloworld.txt');
  });
  //res.status(200).json(JSON.parse(newPortfolioImgsList));
})

router.get('left', async (req, res) => {
  portfolioImgsList = await fs.writeFile('downloads/imgs/imgs.json', 'UTF-8');
  res.status(200).json(JSON.parse(portfolioImgsList));
})

// router.post('/upload-img', async(req, res) => {
//   try {
//     const name = req.body;
//     console.log(name, 'req boy upload img')
//     res.json({ ok : true, message: 'img has been sent' })
//   } catch (error) {
//     console.log(error)
//   }

// })
router.post('/upload-img', function (req, res) {
  const name = req.body;
  console.log(name, 'req boy upload img')
  res.json({ message: 'POST request to the homepage' })
})

//
// upload file
//

router.post('/upload2', async (req, res) => {
  console.log('Upload');
  try {
    // var-s
    let productId = 'test';
    let load_type = req.body.load_type
    //let user_folder = './public/uploads' //+ productId
    let user_folder = './downloads/imgs' //+ productId

    let path = user_folder + '/' + req.body.name
    // Logs
    console.log(req.body)
    // log(`req.body:`.info)
    // log('TYPE '.info, req.body.load_type)
    // create General Folder ?
    // if (!fs.existsSync('./public/uploads')) {
    //   fs.mkdirSync('./public/uploads')
    // }
    if (!fs.existsSync('./downloads/imgs')) {
      fs.mkdirSync('./downloads/imgs')
    }
    // create User Folder ?
    if (!fs.existsSync(user_folder)) {
      fs.mkdirSync(user_folder)
    }
    // Algorithm of uploading
    if (load_type == 'new') {
      console.log('new', path, req.body);
      // Write File
      fs.writeFile(path, req.body.data, 'binary', (err) => {
        console.log(err, 'this is error')
        if (err) {
          res.json({
            msg: 'error in "upload" - 1 ',
            error: err
          })
          throw err
        }
        else res.json({ msg: 'success' })
      })
    }
    else if (load_type == 'append') {
      console.log('áppend');
      // Append part of file
      fs.appendFile(path, req.body.data, 'binary', (err) => {
        if (err) {
          res.json({
            msg: 'error in "upload" -2 ',
            error: err
          })
          throw err
        }
        else {
          res.json({ msg: 'success' })
        }
      })
    }
  } catch (err) {
    console.log(err);
    //error(e, req, res, 500, 'Cannot upload file or fragment! ')
  }
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
      password: req.body.password,
      role: 'user'
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
  if (!user) return res.json({ ok: false, message: 'this user not exist' });

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
