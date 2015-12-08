'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Bookmark;

var bookmarkSchema = Schema({
  title: String,
  url: String,
  likedBy: []
});

Bookmark = mongoose.model('Bookmark', bookmarkSchema);

module.exports = Bookmark;
