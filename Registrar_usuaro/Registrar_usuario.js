(function() {
    'use strict';

    angular
    .module('starter',['ngMaterial'])
    .controller('registrarUsuarioController', registrarUsuarioController);
 //    registrarUsuarioController.$inject = ['registarUsuarioServices'];

    function registrarUsuarioController($scope, $mdDialog,registarUsuarioServices) {
        var vm = this;
        vm.registrarUsuario = registrarUsuario;
        vm.cantidadCaracteres   = cantidadCaracteres;


    function cantidadCaracteres(){
       var telefonoFijo =  vm.telefonoFijo.lenght;
        if(telefonoFijo >  7 ){
          return false;
        }else{
          return true;
        }

      }



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
               vm.nombre1 = '',
               vm.nombre2 ='',
               vm.apellido1 = '',
               vm.apellido2 = '',
               vm.telefonoFijo =  '',
               vm.telefonoMovil = '', 
               vm.email = '',
               vm.preguntaSeguridad = '',
               vm.respuesta = '',
               vm.contrasena = '',
               vm.confirmarContrasena = '',

                $mdDialog.show(
                  $mdDialog.alert()
                     .parent(angular.element(document.querySelector('#dialogContainer')))
                     .clickOutsideToClose(true)
                     .title('Registrar usuario')
                     .textContent('Usuario registrado')
                     .ariaLabel('Usuario registrado')
                     .ok('Cerrar')                     
               );
               
            }else if(data.resultado[0].codRespuesta == "202"){
                $mdDialog.show(
                  $mdDialog.alert()
                     .parent(angular.element(document.querySelector('#dialogContainer')))
                     .clickOutsideToClose(true)
                     .title('Registrar usuario')
                     .textContent('Usuario no registrado, faltan datos por llenar')
                     .ariaLabel('Usuario no registrado')
                     .ok('Cerrar')
                     
               );
            }else if(data.resultado[0].codRespuesta == "203"){
                $mdDialog.show(
                  $mdDialog.alert()
                     .parent(angular.element(document.querySelector('#dialogContainer')))
                     .clickOutsideToClose(true)
                     .title('Registrar usuario')
                     .textContent('Usuario no registrado, Contraseña y confirmación no coinciden')
                     .ariaLabel('Usuario no registrado')
                     .ok('Cerrar')
                     
               );
            }  else {
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