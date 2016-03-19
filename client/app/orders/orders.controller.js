'use strict';
(function () {

  class OrdersComponent {
    constructor() {
      var sample_order = {
          order_id: 145603,
          table_number: 6,
          order_time: "3/18/2016 9:46:32 PM",
          items: [
            {
              customer_name: "Tim",
              quantity: 1,
              item_name: "Chicken Fingers",
              modifications: "Add chili sauce, fries cannot be fried in shellfish oil."
            },
            {
              customer_name: "Barbara",
              quantity: 1,
              item_name: "Hamburger",
              modifications: "No onions."
            },
            {
              customer_name: "Samuel",
              quantity: 2,
              item_name: "Steak Dinner",
              modifications: "The steak must be prepared to absolute perfection.Only the finest meat may touch my glorious and privlaged lips.The steak must be perfectly well done - but still show a little bit of pink.Also, I don't want a steak dinner, the steak must be hamburger patties mushed together with meat glue."
            }
          ]
        };
      this.orders = [sample_order];
    }
  }

  angular.module('webPortalApp')
    .component('orders', {
      templateUrl: 'app/orders/orders.html',
      controller: OrdersComponent,
      controllerAs: "vm"
    });

})();
