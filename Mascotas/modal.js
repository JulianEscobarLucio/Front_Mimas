 angular
        .module('starter', ['ngMaterial'])
        .controller('dialogController', dialogController);

         function dialogController($scope, $mdDialog) {
            $scope.status = '';
            $scope.showAlert = function(ev) {
               $mdDialog.show(
                  $mdDialog.alert()
                     .parent(angular.element(document.querySelector('#dialogContainer')))
                     .clickOutsideToClose(true)
                     .title('TutorialsPoint.com')
                     .textContent('Welcome to TutorialsPoint.com')
                     .ariaLabel('Welcome to TutorialsPoint.com')
                     .ok('Ok!')
                     .targetEvent(ev)
               );
            };    
      
         }      