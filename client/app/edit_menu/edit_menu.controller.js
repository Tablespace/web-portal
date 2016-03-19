'use strict';
(function () {

  class EditMenuComponent {
    constructor() {
      this.menus = [
        {
          index: 0,
          title: "Dinner Menu",
          content: "This is my Dinner Menu!"
        },
        {
          index: 1,
          title: "Lunch Menu",
          content: "This is my Lunch Menu!"
        },
        {
          index: 0,
          title: "Dinner Menu",
          content: "This is my Dinner Menu!"
        },
        {
          index: 0,
          title: "Dinner Menu",
          content: "This is my Dinner Menu!"
        },
        {
          index: 0,
          title: "Dinner Menu",
          content: "This is my Dinner Menu!"
        },
        {
          index: 0,
          title: "Dinner Menu",
          content: "This is my Dinner Menu!"
        },
        {
          index: 0,
          title: "Dinner Menu",
          content: "This is my Dinner Menu!"
        },
        {
          index: 1,
          title: "Lunch Menu",
          content: "This is my Lunch Menu!"
        },
        {
          index: 0,
          title: "Dinner Menu",
          content: "This is my Dinner Menu!"
        },
        {
          index: 1,
          title: "Lunch Menu",
          content: "This is my Lunch Menu!"
        },
        {
          index: 0,
          title: "Dinner Menu",
          content: "This is my Dinner Menu!"
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
