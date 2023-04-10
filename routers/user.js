const UserControllers = require('../controllers/user');
const express = require('express');
const router = express.Router();

router.post('/addDetails', UserControllers.addDetails);

router.get('/getDetails', UserControllers.getDetails);
router.get('/getDetails/:id', UserControllers.getDetailsById)
router.delete('/deleteDetails/:id', UserControllers.deleteDetails);

router.put('/updateDetails/:id', UserControllers.updateDetails);

module.exports = router;
