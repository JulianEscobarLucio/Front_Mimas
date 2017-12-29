(function () {
    'use strict'
    angular
    .module('starter',[])
    .directive('menuTransaccional', function() {
        return {
          restrict: 'E',
          templateUrl: "../menu_transaccional/menu_transaccional.html"
       }
    });
})();
