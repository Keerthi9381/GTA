const express = require('express');
const router= express.Router();
const controller = require('./mentorController');



// router.get('/', controller.getmentor)//think of this as login page
router.post('/register',controller.addmentor)
router.post('/login', controller.getmentorbyemailandpassword)
// router.put('/:id',controller.updateMentor)
// router.delete('/:id',controller.removeMentor)

 
module.exports= router;