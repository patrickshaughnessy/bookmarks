var express = require('express');
var router = express.Router();

router.get('/express', function(req, res, next) {
  res.render('index', { title: 'React' });
});

var links = [];

router.get('/api/links', function(req, res, next) {
   res.json({ links: links });
});

router.post('/api/links', function(req, res, next) {
   var newLink = req.body;
   newLink.id = Date.now();
   links.push(newLink);
   res.json(newLink);
});

router.post('/api/links/delete', function(req, res, next){
  var id = req.body.id;
  console.log(id, req.body);
  links = links.filter(link => {
    return link.id.toString() !== id;
  });
  console.log(links);
  res.json(links);
})

module.exports = router;
