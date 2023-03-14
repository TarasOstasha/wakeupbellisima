var express = require('express');
var router = express.Router();
const fsFile = require('fs').promises;
const fs = require('fs'); // use only in function upload
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
require('dotenv').config()
const reviewsArray = require('../puppeteer.js');
const multer = require('multer');
const chalk = require('chalk');

// mongoose
const User = require('../models/users');
const ReviewMessage = require('../models/review');
const Service = require('../models/serviceModel');
const Certificate = require('../models/certificateModel');
//var cors = require('cors');
//let portfolioImgsList;

/* GET home page. */
// router.get('/', function (req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// ************** services page upload img *****************
const MIME_TYPE_MAP = {
  'image/png': 'png',
  'image/jpeg': 'jpg',
  'image/jpg': 'jpg'
};
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
      const isValid = MIME_TYPE_MAP[file.mimetype];
      let error = new Error('Invalid mime type');
      if(isValid) {
          error = null;
      }
      cb(null, 'downloads/service-images')
      //cb(null, 'front/dist/front/assets/imgs/service-imgs')
  },
  filename: (req, file, cb) => {
      const name = file.originalname.toLowerCase().split(' ').join('-');
      const ext = MIME_TYPE_MAP[file.mimetype];
      cb(null, name + '-' + Date.now() + '.' + ext);
  }
});

// EDIT SERVICE POST
router.patch('/my-service/:id', multer({ storage: storage }).single('imagePath'), async (req, res) => { // *** rebuid must servicePostData.imagePath come from fronend !!!!
  try {
      const url = req.protocol + '://' + req.get('host');
      const { id } = req.params;
      let servicePostData = req.body;
      //if(req.file != undefined) servicePostData.imagePath = url + '/service-images/' + req.file.filename; // posibile issue
      if(req.file != undefined) servicePostData.imagePath = url + '/service-images/' + req.file.filename; // posibile issue
      // else {
      //   servicePostData['image'] = servicePostData['imagePath'];
      //   delete servicePostData['image'];
      // }
      //console.log(servicePostData, req.file, 'from front end')
      const product = await Service.findById(id);
      const fileName = product.imagePath.split('/').pop();
      let imagePath = 'downloads/service-images/' + fileName;
      //console.log(imagePath, 'imagePath')
      if(req.file != undefined) {
        fs.unlinkSync(imagePath);
      }
      // console.log(product,'from data base');
      // if(!product) {
      //   res.status(404).json({
      //     message: 'the product with the given ID was not found'
      //   })
      // }
      let query = {};
      for(const key of Object.keys(servicePostData)) { // check obj key and swap if different
        // console.log(chalk.red(servicePostData[key], 'servicePostData key'));
        // console.log(chalk.blue(product[key], 'product key'));
        if(servicePostData[key] !== product[key]) {
          query[key] = servicePostData[key];
        } 
      }
      //console.log(query, 'query')
      const service = await Service.findOneAndUpdate( { _id: id } , { $set: query }, { new: true } );
      // console.log(service)
      // const service = await Service.findByIdAndUpdate(id, {
      //   serviceName: serviceDataForm.editedServiceName,
      //   serviceInfo: serviceDataForm.editedServiceInfo,
      //   imagePath: url + '/service-images/' + req.file.filename
      // }, { new: true });
      //const service = await Service.findByIdAndUpdate(id, req.body, { new: true });
      // loop through all items path and check if we have unusing img. If yes, remove it from file system ********
      // const getAllServices = await Service.find();
      // console.log(getAllServices);
      res.status(200).json({
          message: 'product updated successfully!!!',
          data: service
      });
  } catch (error) {
    res.status(501).json({ 
      message: 'Server Error',
      error: error
    })
  }

});
// GET SERVICE POST
router.get('/my-service', async (req, res) => {
  try {
    const services = await Service.find();
    res.status(200).json({
      message: 'success',
      data: services
    });
  } catch (error) {
    res.status(500).json({ message: 'error', error });
  }
});
//CREATE SERVICE POST
router.post('/my-service', multer({ storage: storage }).single('image'), async (req, res) => {
  try {
    const url = req.protocol + '://' + req.get('host');
    const dataForm = req.body;
    console.log(dataForm, 'dataForm from front end');
    const servicePost = new Service({
        serviceName: dataForm.serviceName,
        serviceInfo: dataForm.serviceInfo,
        imagePath: url + '/service-images/' + req.file.filename
    });
    await servicePost.save();
    res.status(201).json({
        message: 'product created successfully!!!',
        data: servicePost,
        ok: true
    });
  } catch (error) {
    res.status(501).json({ 
      message: 'Server Error',
      error: error
    })
  }
});
// REMOVE SERVICE POST
router.delete('/my-service/:id', async (req, res) => {
  try {
    const id = req.params.id;
    //console.log(req.params, 'deleted ID');
    const imgUrl = await Service.findById(id);
    const fileName = imgUrl.imagePath.split('/').pop();
    let imagePath = 'downloads/service-images/' + fileName;
    console.log(imagePath)
    const removedPost = await Service.findByIdAndDelete(id, (err, docs) => {
      if(err) console.log('Error', err) 
      else {
        fs.unlinkSync(imagePath);
        console.log("Deleted : ", docs);
      }
    });
    //fs.unlinkSync(imagePath)
    res.status(200).json({
      message: 'Post Successfully deleted',
      data: removedPost,
      ok: true
    })
  } catch (error) {
    res.status(501).json({ 
      message: 'Server Issue',
      error: error
    })
  }
  

});

// about us page
router.get('/certificate', (req, res) => {
  try {
    let certificates = [
      { url: '/certificate/certificate1.jpg' },
      { url: '/certificate/certificate2.jpg' },
      { url: '/certificate/certificate3.jpg' },
      { url: '/certificate/certificate4.jpg' },
      { url: '/certificate/certificate5.jpg' },
      { url: '/certificate/certificate6.jpg' },
      { url: '/certificate/certificate7.jpg' },
      { url: '/certificate/certificate8.jpg' },
      { url: '/certificate/Certificate9.jpg' },
      // { url: '/certificate/Certificate (1).pdf' }
    ];
    res.status(200).json({
      status: 'ok',
      data: certificates
    })
  } catch (error) {
    res.status(500).json({ message: 'error', error });
  }
})

router.get('/portfolio-imgs', async (req, res) => {
  //const portfolioImgsList = await fs.readdir('downloads/imgs');
  //const portfolioImgsList = await fs.readFile('downloads/imgs/imgs.json', 'UTF-8');
  // write end send data to the front end
  const portfolioImgsList = await fsFile.readFile('downloads/imgs/imgs2.json', 'UTF-8');
  res.status(200).json(JSON.parse(portfolioImgsList));
})


router.post('/add-new-file-to-json', async (req, res) => {
  const item = { url: req.body.fileName }
  addNewItem(item);
  res.json({ ok: true });
})
async function addNewItem(item) {
  const portfolioImgsListJson = await fsFile.readFile('downloads/imgs/imgs2.json', 'UTF-8');
  const portfolioImgsListArr = JSON.parse(portfolioImgsListJson);
  portfolioImgsListArr.push(item);
  const newPortfolioImgsListJson = JSON.stringify(portfolioImgsListArr);
  await fsFile.writeFile('downloads/imgs/imgs2.json', newPortfolioImgsListJson);
}

function createJson() {
  const dir = 'downloads/imgs/';
  let myImgs = [];
  const files = fs.readdirSync(dir)
  for (file of files) {
    let objJson = {};
    objJson.url = file;
    const isJson = 'json' == file.split('.')[1];
    if (isJson) continue;
    myImgs.push(objJson);
    const result = JSON.stringify(myImgs);
    fs.writeFile('downloads/imgs/imgs2.json', result, (err) => {
      if (err) throw err;
      console.log('Saved!');
    });
  }
}

// router.get('/deleteItem', async (req, res) => {
//   //console.log(req.body, 'delete')
//   const delited = req.body;
//   // const newPortfolioImgsList = await fs.writeFile('downloads/imgs/imgs2.json', 'hello', function(err,data) {
//   //   if (err) {
//   //     return console.log(err);
//   //   }
//   //   console.log(data);
//   // });
//   fs.writeFile('downloads/imgs/imgs2.json', delited, function (err) {
//     if (err) return console.log(err);
//     console.log('Hello World > helloworld.txt');
//   });
//   //res.status(200).json(JSON.parse(newPortfolioImgsList));
// })

router.delete('/delete-img/:name', async (req, res) => {
  try {
    const fileName = req.params.name;
    const myJson = await fsFile.readFile('downloads/imgs/imgs2.json', 'utf8');
    const imgsArr = JSON.parse(myJson);
    const newImgsArr = imgsArr.filter((item) => {
      return item.url != fileName
    })
    await fsFile.writeFile('downloads/imgs/imgs2.json', JSON.stringify(newImgsArr));
    const sourceUrls = 'downloads/imgs/' + fileName;
    await fsFile.unlink(sourceUrls);
    res.json({ ok: true, message: 'done' });
  } catch (error) {
    res.status(501).json({ ok: true });
    console.error(error);
  }

})

router.post('/move', async (req, res) => {
  console.log(req.body)
  const direction = req.body.direction;
  const index = req.body.index;
  const myJson = await fsFile.readFile('downloads/imgs/imgs2.json', 'utf8');
  const imgsArr = JSON.parse(myJson);
  console.log('testing!!!!');
  if (index == imgsArr.length - 1 && direction == 'right'
    || index == 0 && direction == 'left') {
    return res.json({ ok: true, msg: 'the picture cannot be moved!!!' })

  }
  const currentImg = imgsArr.splice(index, 1)[0];
  console.log(currentImg, 'currentImg');
  if (direction == 'left') imgsArr.splice(index - 1, 0, currentImg);
  if (direction == 'right') imgsArr.splice(index + 1, 0, currentImg);
  await fsFile.writeFile('downloads/imgs/imgs2.json', JSON.stringify(imgsArr));
  res.json({ ok: true });
})


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
// router.post('/register', async (req, res) => {
//   try {
//     const userEmail = req.body.email;
//     const user = await User.findOne({ email: userEmail }); // request to data base
//     if (user) return res.json({ ok: false, message: 'this user already exist' });

//     // create new user
//     const new_user = new User({
//       userName: req.body.name,
//       email: req.body.email,
//       password: req.body.password,
//       role: 'user'
//     });
//     new_user.save();
//     res.json({ ok: true, message: 'new account has been created' });

//     req.login(req.body, () => {
//       res.json({ ok: true })
//     })
//   } catch (error) {
//     console.log(error)
//     res.sendStatus(500);
//   }

// })
// register with encode
router.post('/register', async (req, res) => {
  try {
    const userEmail = req.body.email;
    const user = await User.findOne({ email: userEmail }); // request to data base
    if (user) return res.status(409).json({ ok: false, message: 'this user already exist' });

    // create new user
    bcrypt.hash(req.body.password, 10, (err, hash) => {
      if (err) return res.status(500).json({ ok: false, error: err })
      else {
        const new_user = new User({
          userName: req.body.name,
          email: req.body.email,
          password: hash, //req.body.password,
          role: 'user'
        });
        new_user.save();
        res.json({ ok: true, message: 'new account has been created' });
      }
    })
  } catch (error) {
    console.log(error)
    res.sendStatus(500);
  }

})

// login OLD
// router.post('/login', async (req, res) => {
//   const userEmail = req.body.email;
//   const user = await User.findOne({ email: userEmail });
//   console.log(user);
//   if (!user) return res.json({ ok: false, message: 'this user not exist' });
//   req.login(req.body, () => {
//     res.json({ ok: true, user })
//   })
// });



// login NEW
router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    console.log(user)
    if (!user) return res.json({ ok: false, message: 'this user not exist' });
    bcrypt.compare(req.body.password, user.password, (err, result) => {
      if (err) return res.status(401).json({ message: 'Auth failed' });
      var privateKey = fs.readFileSync('bin/keys/private.key');

      if (result) {
        const token = jwt.sign({
          email: user.email,
          userId: user._id,
          userName: user.userName,
          role: user.role,
          isLogged: user.isLogged
        }, 
        //process.env.JWT_KEY,
        privateKey,
          {
              //expiresIn: "1h"
              algorithm: 'HS256'
          },

        )
 
        return res.status(200).json({ ok: true, message: 'Auth successful', token: token });
      }
      res.status(401).json({ message: 'Auth failed' });
    })

  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error })
  }

})


// log out
router.get('/log-out', async (req, res) => {
  req.logout();
  res.json({ ok: true })
})

// contact me component
router.post('/contacts-mail', async (req, res) => {
  try {
    console.log(req.body, 'contacts mail')
    const recipient = req.body;
    sendMail(recipient, info => {
      console.log(`${info}`);
      res.json({ ok: true, msg: info })
    })
  } catch (error) {
    console.log(error, 'something went wrong');
    res.json('something went wrong on server');
  }
})

// create review-msg
router.post('/review-msg', async (req, res) => {
  try {
    console.log(req.body, 'review mail')
    //const msg = await ReviewMessage.find({});

    const new_review_msg = new ReviewMessage({
      nameReview: req.body.nameReview,
      emailReview: req.body.emailReview,
      messageReview: req.body.messageReview,
      stars: req.body.stars,
      dataReview: req.body.created
    });
    new_review_msg.save();
    res.json({ ok: true, data: new_review_msg })
  } catch (error) {
    console.log(error, 'something went wrong');
    res.json('something went wrong on server');
  }
})
// get review-msgs
router.get('/review-msgs', async (req, res) => {
  const msg = await ReviewMessage.find();
  //const googleReviews = await reviewsArray();
  //res.json({ ok: true, data: msg, googleData: googleReviews.mainReviewArray })
  res.json({ ok: true, data: msg })

});

//const details = require('../config/details.json');

// nodemailer
async function sendMail(recipient, callback) {
  // step 1
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    // port: 587,
    // secure: false,
    port: 465,
    secure: true, // use SSL
    auth: {
      // user: 'tdeveloper241@gmail.com',
      // pass: 'december22@'
      user: process.env.EMAIL,
      pass: process.env.PASSWORD
      // user: 'tonyjoss1990@gmail.com',
      // pass: 'ostasha19901102'
    }
  })
  // step 2 
  let mailOptions = {
    from: 'tonyjoss1990@gmail.com', // sender address
    to: recipient.email, // list of receivers
    subject: recipient.subject,
    html: recipient.message
  }
  //step 3
  // send mail with defined transports object
  let info = await transporter.sendMail(mailOptions);
  callback(info)

  // another method step 3
  // transporter.sendMail(mailoptions, function(err, data) {
  //   if(err) console.log('Error!!!')
  //   else console.log('Email sent!!!')
  // })
}

//redirect all get request to index.html. Must be the last!!!!!!!!!!!!!!!
router.get('/*', async (req, res, next) => {
  try {
    const html = await fsFile.readFile('../front/dist/front/index.html');
    res.end(html);
    // res.redirect('/index.html');
  } catch (error) {
    console.log(error)
    res.status(500).json({ msg: 'error on server' })
  }

});

module.exports = router;
