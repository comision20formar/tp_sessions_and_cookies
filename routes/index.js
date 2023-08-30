var express = require('express');
const { index, processForm, about, logout } = require('../controllers/indexController');
const userDataCheck = require('../middlewares/userDataCheck');
var router = express.Router();

/* GET home page. */
router
  .get('/',index)
  .post('/',processForm)
  .get('/about',userDataCheck, about)
  .get('/logout',logout)

module.exports = router;
