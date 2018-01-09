    'use strict'
    angular
    .module('starter',[])
    .directive('menuPublico', function() {
        return {
          restrict: 'E', 
          templateUrl: "../menu_publico/menu_publico.html"
       }
    });



