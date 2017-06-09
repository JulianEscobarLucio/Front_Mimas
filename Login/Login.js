(function() {
    'use strict';

    angular
    .module('starter',['ngMaterial'])
    .controller('loginController', loginController);

  function loginController($scope, $mdDialog,loginServices) {
        var vm = this;
        vm.ingresar = ingresar;

      function ingresar() { 
                 var requestJson = {
                    "email" : vm.usuario,
                    "contrasena" : vm.contrasena
                    }        
            vm.modalShown2 = true;
            console.log(JSON.stringify(requestJson));
            loginServices.login(requestJson).then(function(data){
            debugger;
            if(data.resultado[0].codRespuesta == "200") {                
                $mdDialog.show(
                  $mdDialog.alert()
                     .parent(angular.element(document.querySelector('#dialogContainer')))
                     .clickOutsideToClose(true)
                     .title('Registrar usuario')
                     .textContent('Usuario valido')
                     .ariaLabel('Usuario registrado')
                     .ok('Cerrar')                     
               );
            }else{
                $mdDialog.show(
                  $mdDialog.alert()
                     .parent(angular.element(document.querySelector('#dialogContainer')))
                     .clickOutsideToClose(true)
                     .title('Registrar usuario')
                     .textContent('Usuario no valido')
                     .ariaLabel('Usuario no registrado')
                     .ok('Cerrar')
                     
               );
            }  
       });
   }
}        
    
})();