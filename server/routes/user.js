const express = require('express');

const userController = require('../controllers/userController');
const tripController = require('../controllers/tripController');

const router = express.Router();

// get a user's info
router.get('/:id',
    // middleware,
    (req, res) => {
    console.log('--Sending data from userRouter.GET\'s aynonmouns func--');
    return res.status(200).json(); //res.locals.userData
    }
);

// save a new user
router.post('/',
  // middleware,
  (req, res) => {
    console.log('--Sending data from userRouter.POST\'s aynonmouns func--');
    return res.status(200).json(res.locals.newCharacter); // Send newCharacter Data
  }
);

// delete user
router.delete('/:id',
  // middleware,
  (req, res) => {
    console.log('--Sending data from charaRouter.DELETE\'s aynonmouns func--');
    return res.status(200).json(res.locals.deletedCharacter); // We need to send back the updated character's object (so the client can re-render)
  }
);

// EXPORT THE ROUTER!!!
module.exports = router;