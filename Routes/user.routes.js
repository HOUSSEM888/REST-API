const express = require('express')
const router = express.Router()
const userCtrl = require('../controllers/user.controllers')


router.post('/add-new-user',userCtrl.addUser)

router.put('/update-user/:id',userCtrl.updateUser)

module.exports = router