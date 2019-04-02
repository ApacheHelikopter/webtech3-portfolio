var express = require('express');
var router = express.Router();

var messageController = require('../controllers/message.js');

/* GET: / */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'IMD CHAT' });
});

/* GET: /api/v1/messages */
router.get('/api/v1/messages' , messageController.get);

module.exports = router;
