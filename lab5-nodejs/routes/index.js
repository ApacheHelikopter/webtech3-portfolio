var express = require('express');
var router = express.Router();

var messageController = require('../controllers/message.js');

/* GET: / */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'IMD CHAT' });
});

/* GET: /api/v1/messages */
router.get('/api/v1/messages' , messageController.get);

/* GET: /api/v1/messages/:id */
router.get('/api/v1/messages/:id', messageController.getId);

/* POST: /api/v1/messages */
router.post('/api/v1/messages', messageController.post);

/* PUT: /api/v1/messages/:id */
router.put('/api/v1/messages/:id', messageController.put);

/* DELETE: /api/v1/messages/:id */
router.delete('/api/v1/messages/:id', messageController.del);

module.exports = router;
