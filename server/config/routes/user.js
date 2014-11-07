'use strict';

var express		= require('express');
var controller	= require('../../controllers/user');

var router = express.Router();

router.get('/:id',			controller.read);
router.post('/',			controller.create);
router.post('/token',		controller.token);
router.put('/:id',			controller.update);
router.patch('/:id',		controller.update);

module.exports = router;