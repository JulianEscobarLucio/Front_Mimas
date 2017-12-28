(function () {
    'use strict'
    angular
    .module('starter',[])
    .directive('menuPublico', function() {
        return {
          restrict: 'E', //puede ser 'A' o 'AE'
          templateUrl: "../menu_publico/menu_publico.html"
       }
    });

})();

