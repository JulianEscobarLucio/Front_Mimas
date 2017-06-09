(function() {
    'use strict';

    angular
    .module('starter',['ngMaterial'])
    .controller('registrarUsuarioController', registrarUsuarioController);
 //    registrarUsuarioController.$inject = ['registarUsuarioServices'];

    function registrarUsuarioController($scope, $mdDialog,registarUsuarioServices) {
        var vm = this;
        vm.registrarUsuario = registrarUsuario;


     function registrarUsuario() { 

                 var requestJson = {
                    "nombre1" : vm.nombre1,
                    "nombre2" : vm.nombre2,
                    "apellido1" : vm.apellido1,
                    "apellido2" : vm.apellido2,
                    "telefonoFijo" : vm.telefonoFijo,
                    "telefonomovil" : vm.telefonoMovil, 
                    "email" : vm.email,
                    "pregunta":  vm.preguntaSeguridad,
                    "respuesta" :  vm.respuesta,
                    "contrasena" :vm.contrasena,
                    "confirmarContrasena" : vm.confirmarContrasena
                    }        
             vm.modalShown2 = true;
               console.log(JSON.stringify(requestJson));

              registarUsuarioServices.registrarUsuario(requestJson).then(function(data){
                debugger;
            if(data.resultado[0].codRespuesta == "200") {                
                $mdDialog.show(
                  $mdDialog.alert()
                     .parent(angular.element(document.querySelector('#dialogContainer')))
                     .clickOutsideToClose(true)
                     .title('Registrar usuario')
                     .textContent('Usuario registrado')
                     .ariaLabel('Usuario registrado')
                     .ok('Cerrar')                     
               );
            }else{
                $mdDialog.show(
                  $mdDialog.alert()
                     .parent(angular.element(document.querySelector('#dialogContainer')))
                     .clickOutsideToClose(true)
                     .title('Registrar usuario')
                     .textContent('Usuario no registrado')
                     .ariaLabel('Usuario no registrado')
                     .ok('Cerrar')
                     
               );
            }  
       });
   }
}        
    
})();