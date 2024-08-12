const express = require('express');
const user_registration = require('../controllers/user_register_c');
const router = express.Router()

// Require the User model
router.post('/Register_User', user_registration)
module.exports = router