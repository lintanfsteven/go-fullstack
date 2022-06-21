const express = require('express');
const router = express.Router();
const Thing = require('../models/Thing');
const stuffCtrl = require('../controllers/stuff');

router.post('/', stuffCtrl.createThing);

router.put('/:id', stuffCtrl.modifyThing);

router.delete('/:id', stuffCtrl.deleteThing);

router.get('/:id', stuffCtrl.getOneThing);

router.use('/', stuffCtrl.getAllThings);

module.exports = router;