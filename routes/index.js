var express = require('express');
var router = express.Router();

var Bookmark = require('../models/bookmark')

function filterLikes(links, ip){
  return links.map(link => {
    if (link.likedBy.indexOf(ip) !== -1){
      link.liked = true;
    } else {
      link.liked = false;
    }
    return link;
  })
}



router.get('/express', function(req, res, next) {
  res.render('index', { title: 'React' });
});

var memLinks = [];

router.get('/api/links', function(req, res, next) {
  Bookmark.find({}, function(error, links){
    res.json({ links: filterLikes(links, req.ip) });
  }).lean();
});

router.post('/api/links', function(req, res, next) {
  Bookmark.create(req.body, function(err, savedLink){
     res.json(savedLink);
  })
});

router.post('/api/links/delete', function(req, res, next){
  var id = req.body._id;

  Bookmark.findByIdAndRemove(id, function(err){
    Bookmark.find({}, function(err, links){
      res.json(filterLikes(links, req.ip));
    }).lean();
  });
});

router.post('/api/links/like', function(req, res, next){
  var ip = req.ip;
  var id = req.body._id;

  Bookmark.findById(id, function(err, link){
    var idx = link.likedBy.length ? link.likedBy.indexOf(ip) : -1;
    if (idx >= 0){
      link.likedBy.splice(idx, 1);
    } else {
      link.likedBy.push(ip);
    }
    link.save(function(err){
      Bookmark.find({}, function(err, links){
        res.json(filterLikes(links, ip));
      }).lean()
    });
  })
})

module.exports = router;
