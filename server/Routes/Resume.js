const express = require('express')
const router = express.Router()
const resumeController = require('../controllers/resumeController')


router.post('/', resumeController.PostResume)

router.get('/', resumeController.GetResume)

router.put('/',resumeController.UpdateResume)

module.exports = router