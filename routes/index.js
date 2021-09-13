const express = require("express")
const router = express.Router()

const authenticate = require('../middlewares/authentication')

router.use('/auth', require('./auth'))
router.use('/company', authenticate, require('./company'))
router.use('/associated', require('./associated'))
router.use('/description', require('./description'))

module.exports = router