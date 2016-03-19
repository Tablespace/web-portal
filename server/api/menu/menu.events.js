/**
 * Menu model events
 */

'use strict';

var EventEmitter = require('events').EventEmitter;
var Menu = require('./menu.model');
var MenuEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
MenuEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Menu.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    MenuEvents.emit(event + ':' + doc._id, doc);
    MenuEvents.emit(event, doc);
  }
}

module.exports = MenuEvents;
