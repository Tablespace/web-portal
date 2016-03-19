'use strict';
(function(){

class EditMenuComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('webPortalApp')
  .component('editMenu', {
    templateUrl: 'app/edit_menu/edit_menu.html',
    controller: EditMenuComponent
  });

})();
