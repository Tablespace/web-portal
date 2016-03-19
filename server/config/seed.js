/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import Thing from '../api/thing/thing.model';
import User from '../api/user/user.model';
import Order from '../api/order/order.model';
import Menu from '../api/menu/menu.model';

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
      Menu.find({}).remove()
        .then(() => {
          User.findOne({email: 'famoso@restaurant.com'})
            .then((user) => {
              Menu.create({
                "title": "Appetizers",
                "content": "This is the appetizers menu",
                "restaurant_id": user._id,
                "active": true,
                "menu_items": [{
                  title: "Cactus Cuts",
                  description: "Spicy and thinly sliced fried potatoes served with our mouth-watering cactus dip - a rich blend of crushed chilies, green onion, sour cream and Parmesan.",
                  active: true,
                  price: 10.00,
                  picture: "http://i.imgur.com/P8ua9ut.png"
                }, {
                  title: "Chicken Fingers",
                  description: "Original or Buffalo style. Lightly breaded chicken breast filet served with your choice of dipping sauce.",
                  active: true,
                  price: 10.00,
                  picture: "http://i.imgur.com/ecnHEVh.png"
                }, {
                  title: "Classic Nachos",
                  description: "Hand-cut tortilla chips layered with cheddar and pizza mozzarella, topped with black olives, green peppers, tomatoes and jalapeño peppers. Served with salsa and sour cream on the side.Due to the nature of this item, we recommend it be enjoyed in the restaurant and do not offer it for Take-out or Delivery.",
                  active: true,
                  price: 10.00,
                  picture: "http://i.imgur.com/tIUUdLB.png"
                }, {
                  title: "Fried Wings",
                  description: "Fried until golden and crispy.",
                  active: true,
                  price: 10.00,
                  picture: "http://i.imgur.com/Zckbqza.png"
                }, {
                  title: "Garlic Toast",
                  description: "Fresh from the oven, brushed with butter and garlic.",
                  active: true,
                  price: 10.00,
                  picture: "http://i.imgur.com/s4YvH87.png"
                }, {
                  title: "Salt and Pepper Dry Ribs",
                  description: "Tender pork ribs fried and tossed in a salt & pepper dry rub and finished with chopped red peppers.",
                  active: true,
                  price: 10.00,
                  picture: "http://i.imgur.com/27bgJWH.png"
                }, {
                  title: "Three Cheese Bread",
                  description: "Loaded with bubbling cheddar, pizza mozzarella and Parmesan with a hint of garlic.",
                  active: true,
                  price: 10.00,
                  picture: "http://i.imgur.com/3we7dRQ.jpg"
                }]
              }, {
                "title": "Entrees",
                "content": "This is the entrees menu",
                "restaurant_id": user._id,
                "active": true,
                "menu_items": [{
                  title: "Beef Dip",
                  description: "It doesn’t get any better than our reimagined beef dip. Thinly sliced steak piled high on a toasted garlic-brushed bun with melted pizza mozzarella, braised onions, roasted red peppers and crispy onion straws. Served with horseradish mayo and jus for dipping.",
                  active: true,
                  price: 15.00,
                  picture: "http://i.imgur.com/slqaMuK.png"
                }, {
                  title: "Prime Rib Burger",
                  description: "100% Canadian half-pound prime rib beef burger, fresh lettuce, tomato, red onion and pickles. Plus, our secret ingredient - a zesty sauce that simply defies description. Recommended for burger connoisseurs.",
                  active: true,
                  price: 10.00,
                  picture: "http://i.imgur.com/99hU5nq.png"
                }, {
                  title: "Chicken Quesadilla",
                  description: "A tortilla stuffed with tender chicken, sun-dried tomatoes, cheddar, pizza mozzarella, sun-dried tomato pesto and tangy chipotle sauce, then brushed with garlic spread and Parmesan and oven baked to golden perfection. Served with sour cream and salsa for dipping.",
                  active: true,
                  price: 10.00,
                  picture: "http://i.imgur.com/ww9owCc.png"
                }, {
                  title: "Chicken Parmesan",
                  description: "A tender chicken breast, breaded and fried until golden brown, topped with our signature marinara sauce and pizza mozzarella, then baked to perfection. Served with garlic toast, seasonal vegetables and your choice of side dish.",
                  active: true,
                  price: 10.00,
                  picture: "http://i.imgur.com/AIQ5AMR.png"
                }, {
                  title: "Ribs and Wings",
                  description: "Succulent, oh-so-slowly roasted pork back ribs baked in your choice of our signature BBQ, honey garlic, Jack Daniel’s® BBQ or whisky BBQ sauce, paired with Boston's famous wings prepared just the way you like them. Served with garlic toast, seasonal vegetables and your choice of side dish.",
                  active: true,
                  price: 10.00,
                  picture: "http://i.imgur.com/oQc38mn.png"
                }, {
                  title: "Steak and Veggies",
                  description: "A 7-ounce New York strip loin steak, aged a minimum of 28 days to the peak of tenderness and flavour, charbroiled the way you like it. Served with seasonal vegetables and garden greens with low-fat poppy seed dressing. Sodium: 333 mg, Protein: 44 g, Calories: 446, Saturated fat: 7.8 g, Total fat: 22.9 g. Due to the nature of this item, we recommend it be enjoyed in the restaurant and do not offer it for Take-out or Delivery.",
                  active: true,
                  price: 10.00,
                  picture: "http://i.imgur.com/dJGe3TQ.png"
                }, {
                  title: "Crispy Chicken Pecan Salad",
                  description: "Breaded chicken breast filet, toasted pecans, pizza mozzarella, cheddar, smoky bacon, chopped egg, julienne carrots and diced tomato over fresh garden greens tossed in ranch dressing.",
                  active: true,
                  price: 10.00,
                  picture: "http://i.imgur.com/N9UbSl3.jpg"
                }, {
                  title: "Garden Salad",
                  description: "A blend of garden and artisan greens served with our house balsamic vinaigrette. Starter size only.",
                  active: true,
                  price: 5.00,
                  picture: "http://i.imgur.com/zzTLX3K.png"
                }, {
                  title: "Mediterranean Salad",
                  description: "Our twist on a favourite. Chunks of cucumbers, red onions, red peppers and tomatoes tossed in a Mediterranean vinaigrette with feta and kalamata olives on a bed of garden greens.",
                  active: true,
                  price: 10.00,
                  picture: "http://i.imgur.com/57z7g6I.png"
                }, {
                  title: "Caesar Salad",
                  description: "Romaine lettuce tossed with our signature creamy garlic dressing and crunchy croutons, sprinkled with freshly grated Parmesan.",
                  active: true,
                  price: 10.00,
                  picture: "http://i.imgur.com/gaZKa8C.png"
                }, {
                  title: "Jambalaya Fettucini",
                  description: "Fettuccini tossed in our signature marinara sauce with tender chicken breast, shrimp, spicy Italian sausage, tomatoes, green peppers and topped with green onions.",
                  active: true,
                  price: 7.00,
                  picture: "http://i.imgur.com/LJohYcU.png"
                }, {
                  title: "Lasagna",
                  description: "Our beefy Bolognese sauce layered over tender noodles, topped with pizza mozzarella, then baked to perfection and finished with fresh Parmesan.",
                  active: true,
                  price: 10.00,
                  picture: "http://i.imgur.com/UjvsDSS.png"
                }, {
                  title: "Pepperoni Pizza",
                  description: "Signature pizza sauce, pizza mozzarella and loads of pepperoni.",
                  active: true,
                  price: 10.00,
                  picture: "http://i.imgur.com/cO8saJT.png"
                }, {
                  title: "Chicken and Mushroom Fettuccini",
                  description: "A blend of garden and artisan greens served with our house balsamic vinaigrette. Starter size only.",
                  active: true,
                  price: 10.00,
                  picture: "http://i.imgur.com/zzTLX3K.png"
                }, {
                  title: "Deluxe Pizza",
                  description: "Signature pizza sauce, pizza mozzarella, pepperoni, smoked ham, green pepper and fresh mushrooms.",
                  active: true,
                  price: 5.00,
                  picture: "http://i.imgur.com/zzTLX3K.png"
                }, {
                  title: "Vegetarian Pizza",
                  description: "Signature pizza sauce, pizza mozzarella, fresh mushrooms, green peppers and onions, topped with fresh tomato slices. For a lighter option try it as a small multrigrain thin crust.",
                  active: true,
                  price: 10.00,
                  picture: "http://i.imgur.com/GZowsYY.png"
                }]
              }, {
                "title": "Desserts",
                "content": "This is the desserts menu",
                "restaurant_id": user._id,
                "active": true,
                "menu_items": [{
                  title: "Apple Crisp",
                  description: "Just like mom used to make it. Slices of sweet granny smith apples in a butter sauce, baked to a crisp with a delicious brown sugar and oat crust. Topped with caramel sauce and served with a scoop of vanilla bean ice cream.Due to the nature of this item, we recommend it be enjoyed in the restaurant and do not offer it for Take-out or Delivery.",
                  active: true,
                  price: 7.00,
                  picture: "http://i.imgur.com/6dwDy5X.png"
                }, {
                  title: "Brownie",
                  description: "A warm chocolate brownie topped with two scoops of vanilla bean ice cream, caramel and chocolate sauce.Due to the nature of this item, we recommend it be enjoyed in the restaurant and do not offer it for Take-out or Delivery.",
                  active: true,
                  price: 3.00,
                  picture: "http://i.imgur.com/BfxhW3S.png"
                }, {
                  title: "Chocolate Cake",
                  description: "Ultimate decadence. Creamy chocolate mousse with chunks of cheesecake, caramel, toffee, pecans and almonds on a chocolate crust.",
                  active: true,
                  price: 3.00,
                  picture: "http://i.imgur.com/crQ4BM4.png"
                }, {
                  title: "New York Cheesecake",
                  description: "A cheesecake lover’s delight. Traditional style creamy cheesecake piled high on a graham cracker crust.",
                  active: true,
                  price: 3.00,
                  picture: "http://i.imgur.com/eXkQcSn.png"
                }]
              }, {
                "title": "Drinks",
                "content": "This is the drinks menu",
                "restaurant_id": user._id,
                "active": true,
                "menu_items": [{
                  title: "Milk",
                  active: true,
                  price: 7.00,
                  picture: "http://i.imgur.com/0CwIREH.png"
                }, {
                  title: "Chocolate Milk",
                  active: true,
                  price: 3.00,
                  picture: "http://i.imgur.com/T4ITVzS.png"
                }, {
                  title: "12oz Can of Pop",
                  description: "7Up®, Pepsi®, Diet Pepsi®, MUG® Root Beer, Brisk® Iced Tea 12 Oz can. Delivery / Pick-Up only.",
                  active: true,
                  price: 3.00,
                  picture: "http://i.imgur.com/DA7z2MS.png"
                }, {
                  title: "Fruit Juice",
                  description: "Choose from apple or orange juice.",
                  active: true,
                  price: 3.00,
                  picture: "http://i.imgur.com/3J6ecRx.png"
                }, {
                  title: "Hot Chocolate",
                  description: "Nice and Sweet.",
                  active: true,
                  price: 3.00,
                  picture: "http://i.imgur.com/g86LTLr.png"
                }, {
                  title: "Starbucks Pike Place Coffee",
                  description: "A smooth, well-rounded blend of Latin American coffees. Pike Place is a registered trademark of The Pike Place Market PDA, used under license.",
                  active: true,
                  price: 3.00,
                  picture: "http://i.imgur.com/Anovd2H.png"
                }, {
                  title: "Tazo® Teas",
                  description: "Visit your local BP and ask your server for our current available selection of premium Tazo® Teas including black, green and herbal infusions.",
                  active: true,
                  price: 3.00,
                  picture: "http://i.imgur.com/PMkN2Yt.png"
                }]
              });
            });
        });
      Order.find({}).remove()
        .then(() => {
          User.findOne({email: 'famoso@restaurant.com'})
            .then((user) => {
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


