'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var OrderSchema = new Schema({
  order_time: {type: Date, deafult: Date.now},
  table_number: Number,
  items: [{
    "customer_name": String,
    "customer_id": ObjectId,
    "quantity": Number,
    "item_name": String,
    "standard_mods": String,
    "special_mods": String
  }],
  restaurant_id: ObjectId,
  status: String,
  total: Number
});

module.exports = mongoose.model('Order', OrderSchema);
