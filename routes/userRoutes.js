const express = require('express');
const { getAllUsers, registerController, loginController } = require('../controller/userController');

const router = express.Router()


// get all users || get
router.get('/all-users', getAllUsers);

//cretae user ||post
router.post('/register',registerController);



//loin  \\ post

router.post('/login',loginController);

module.exports = router;