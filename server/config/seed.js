/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import Thing from '../api/thing/thing.model';
import User from '../api/user/user.model';
import Order from '../api/order/order.model';

Thing.find({}).remove()
  .then(() => {
    Thing.create({
      name: 'Development Tools',
      info: 'Integration with popular tools such as Bower, Grunt, Babel, Karma, ' +
             'Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, ' +
             'Stylus, Sass, and Less.'
    }, {
      name: 'Server and Client integration',
      info: 'Built with a powerful and fun stack: MongoDB, Express, ' +
             'AngularJS, and Node.'
    }, {
      name: 'Smart Build System',
      info: 'Build system ignores `spec` files, allowing you to keep ' +
             'tests alongside code. Automatic injection of scripts and ' +
             'styles into your index.html'
    }, {
      name: 'Modular Structure',
      info: 'Best practice client and server structures allow for more ' +
             'code reusability and maximum scalability'
    }, {
      name: 'Optimized Build',
      info: 'Build process packs up your templates as a single JavaScript ' +
             'payload, minifies your scripts/css/images, and rewrites asset ' +
             'names for caching.'
    }, {
      name: 'Deployment Ready',
      info: 'Easily deploy your app to Heroku or Openshift with the heroku ' +
             'and openshift subgenerators'
    });
  });

User.find({}).remove()
  .then(() => {
    User.create({
      provider: 'local',
      name: 'Test User',
      email: 'test@example.com',
      password: 'test'
    }, {
      provider: 'local',
      name: 'Famoso',
      email: 'famoso@restaurant.com',
      password: 'famoso',
      address: '11750 Jasper Avenue NW, Edmonton, AB, T5K 0N3, Canada',
      phone: '780-732-0700',
      logo: 'http://famoso.ca/wp-content/themes/famoso/images/logo-mini-famoso.png',
      usertype: 'restaurant',
      hours: 'Sunday & Monday: 11am - 10pm, Tuesday - Saturday: 11am - 11pm'
    }, {
      provider: 'local',
      role: 'admin',
      name: 'Admin',
      email: 'admin@example.com',
      password: 'admin'
    })
    .then(() => {
      console.log('finished populating users');
    })
    .then(() => {
      Order.find({}).remove()
        .then(() => {
          User.findOne({email: 'famoso@restaurant.com'})
            .then((user) => {
              console.log(user)
              Order.create({
                "table_number": 14,
                "total": 15.5,
                "restaurant_id": user._id ,
                "order_time": Date.now(),
                "items": [{
                  "customer_name": "Tim",
                  "quantity": 1,
                  "item_name": "Chicken Fingers",
                  "standard_mods": "Add chili sauce",
                  "special_mods": "fries cannot be in shellfish oil"
                }, {
                  "customer_name": "Tim",
                  "quantity": 1,
                  "item_name": "Salad",
                  "standard_mods": "Add ceasar dressing"
                }]
              }, {
                "table_number": 8,
                "total": 12.25,
                "restaurant_id": user._id ,
                "order_time": Date.now(),
                "items": [{
                  "customer_name": "John",
                  "quantity": 1,
                  "item_name": "Chicken Wings",
                  "standard_mods": "Add ranch sauce",
                }, {
                  "customer_name": "John",
                  "quantity": 1,
                  "item_name": "Sprite",
                }]
              }, {
                "table_number": 6,
                "total": 18,
                "restaurant_id": user._id ,
                "order_time": Date.now(),
                "items": [{
                  "customer_name": "Sarah",
                  "quantity": 1,
                  "item_name": "Famoso Pizza",
                  "standard_mods": "Add ham",
                  "special_mods": "Gluten free"
                }]
              });
            });
        });
    });
  });


