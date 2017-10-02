(function() {
    'use strict';
    angular
    .module('starter',['ngMaterial'])
    .controller('loginController', loginController);

  function loginController($scope, $mdDialog,loginServices, $location) {
        var vm = this;
        vm.ingresar = ingresar;
        vm.cancelar = cancelar;
        vm.mensajeUsuario = '';
        vm.mensajeContrasena = '';
        vm.functionUsuario = functionUsuario ;
        vm.functionContrasena = functionContrasena;
        vm.login = login;
        debugger;
        localStorage.setItem("user", '');


      function functionUsuario(){
        if (vm.usuario.length > 0) {
          vm.mensajeUsuario = '';
        }

      }

      function functionContrasena(){
         if (vm.contrasena.length > 0) {
          vm.mensajeContrasena = '';
        }

      }

      function ingresar() {

            if(vm.usuario == undefined || vm.usuario == ''){
               vm.mensajeUsuario = 'Ingrese un valor válido';
               return;
            }


            if(vm.contrasena == undefined || vm.contrasena == ''){
               vm.mensajeContrasena = 'Ingrese un valor válido';
               return;
            }

            grecaptcha.execute();
            
   }


   function cancelar(){
     vm.usuario = "";
     vm.contrasena = "";
   }
} 

function login(){
       var requestJson = {
                    "email" : vm.usuario,
                    "contrasena" : vm.contrasena
                    }        
            vm.modalShown2 = true;
            console.log(JSON.stringify(requestJson));
                      
            loginServices.login(requestJson).then(function(data){
            debugger;
            if(data.resultado[0].codRespuesta == "200") { 
                      
                 debugger;
                localStorage.setItem("user", data.resultado[0].nombre1 + " " + data.resultado[0].apellido1);             
                $mdDialog.show(
                  $mdDialog.alert()
                     .parent(angular.element(document.querySelector('#dialogContainer')))
                     .clickOutsideToClose(true)
                     .title('Ingresar')
                     .textContent('Usuario valido')
                     .ariaLabel('Usuario registrado')
                     .ok('Cerrar')                     
               );
                     
               
               document.getElementById("redirect").click();            

            }else{
                $mdDialog.show(
                  $mdDialog.alert()
                     .parent(angular.element(document.querySelector('#dialogContainer')))
                     .clickOutsideToClose(true)
                     .title('Ingresar')
                     .textContent('Usuario no valido')
                     .ariaLabel('Usuario no registrado')
                     .ok('Cerrar')
                     
               );
            }  
       });
}       
    
})();