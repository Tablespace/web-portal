/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/menus              ->  index
 * POST    /api/menus              ->  create
 * GET     /api/menus/:id          ->  show
 * PUT     /api/menus/:id          ->  update
 * DELETE  /api/menus/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');
var Menu = require('./menu.model');

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}

function responseWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if (entity) {
      res.status(statusCode).json(entity);
    }
  };
}

function handleEntityNotFound(res) {
  return function(entity) {
    if (!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function saveUpdates(updates) {
  return function(entity) {
    var updated = _.merge(entity, updates);
    return updated.saveAsync()
      .spread(function(updated) {
        return updated;
      });
  };
}

function removeEntity(res) {
  return function(entity) {
    if (entity) {
      return entity.removeAsync()
        .then(function() {
          res.status(204).end();
        });
    }
  };
}

// Gets a list of Menus
exports.index = function(req, res) {
  Menu.findAsync()
    .then(responseWithResult(res))
    .catch(handleError(res));
};

// Gets a single Menu from the DB
exports.show = function(req, res) {
  Menu.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(responseWithResult(res))
    .catch(handleError(res));
};

// Creates a new Menu in the DB
exports.create = function(req, res) {
  Menu.createAsync(req.body)
    .then(responseWithResult(res, 201))
    .catch(handleError(res));
};

// Updates an existing Menu in the DB
exports.update = function(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  Menu.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(saveUpdates(req.body))
    .then(responseWithResult(res))
    .catch(handleError(res));
};

// Deletes a Menu from the DB
exports.destroy = function(req, res) {
  Menu.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
};

exports.getmenus = function(req, res) {
  Menu.findAsync({restaurant_id: req.params.restaurant_id}, null, {sort: {'index': 1}})
    .then(responseWithResult(res))
    .catch(handleError(res));
};
