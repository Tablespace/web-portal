'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var MenuSchema = new Schema({
  title: String,
  content: String,
  active: Boolean,
  restaurant_id: ObjectId,
  menu_items: [{
    title: String,
    description: String,
    active: Boolean,
    picture: String,
    price: Number,
    discount: Number,
    tags: []
  }]
});

module.exports = mongoose.model('Menu', MenuSchema);
