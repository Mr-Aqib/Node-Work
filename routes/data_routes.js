const express = require('express');
const router= express.Router()
const { get_data, post_data, delete_data, put_data } = require('../controllers/data_controller');

router.get('/get-data', get_data )
// Post Api
router.post('/post-data', post_data )
// Put Api on Id base
router.put('/put-data/:user_id', put_data )
// Delete api on Id base
router.delete('/delete-data/:user_id', delete_data)
module.exports = router