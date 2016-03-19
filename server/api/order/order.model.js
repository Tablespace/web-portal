'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));
var Schema = mongoose.Schema;

var OrderSchema = new Schema({
  order_time: {type: Date, deafult: Date.now},
  table_number: Number,
  items: []
});

module.exports = mongoose.model('Order', OrderSchema);
