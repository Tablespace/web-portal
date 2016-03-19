'use strict';
(function () {

  class EditMenuComponent {
    constructor() {
      this.menus = [
        {
          index: 0,
          title: "Dinner Menu",
          content: "This is my Dinner Menu!",
          menu_items: [
            {
              title: "Test item",
              description: "Tender juicy tomatoes"
            },
            {
              title: "Test item 1",
              description: "Tender juicy tomatoes"
            },
            {
              title: "Test item 1",
              description: "Tender juicy tomatoes"
            },
            {
              title: "Test item 1",
              description: "Tender juicy tomatoes"
            },
            {
              title: "Test item 1",
              description: "Tender juicy tomatoes"
            }

          ]
        },
        {
          index: 1,
          title: "Lunch Menu",
          content: "This is my Lunch Menu!"
        }
      ]
    }
  }

  angular.module('webPortalApp')
    .component('editMenu', {
      templateUrl: 'app/edit_menu/edit_menu.html',
      controller: EditMenuComponent,
      controllerAs: 'vm'
    });

})();
