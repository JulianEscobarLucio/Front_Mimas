(function() {
    'use strict';

    angular
    .module('starter',['ngMaterial','ngRoute'])
    .controller('UsuarioController', UsuarioController);
 //    registrarUsuarioController.$inject = ['registarUsuarioServices'];

    function UsuarioController($scope, $mdDialog,UsuarioServices, $location) {
        var vm = this;
        vm.actualizarUsuario = actualizarUsuario;
        vm.eliminarUsuario = eliminarUsuario;
        vm.consultarUsuario = consultarUsuario;      
        vm.mensajeNombre1 = "";
        vm.mensajeNombre2 = "";
        vm.mensajeApellido1 = "";
        vm.mensajeapellido2 = "";
        vm.mensajeTelefonoFijo = "";
        vm.mensajeTelefonoMovil = "";
        vm.mensajeEmail = "";
        vm.mensajePreguntaSeguridad = "";
        vm.mensajeRespuesta = "";
        vm.mensajeContrasena = "";
        vm.mensajeConfirmarContrasena = "";
        vm.functionNombre1 =  functionNombre1;
        vm.functionNombre2 =  functionNombre2;
        vm.functionApellido1 =  functionApellido1;
        vm.functionapellido2 =  functionapellido2;
        vm.functionTelefonoFijo =  functionTelefonoFijo;
        vm.functionTelefonoMovil =  functionTelefonoMovil;
        vm.functionEmail =  functionEmail;
        vm.functionPreguntaSeguridad = functionPreguntaSeguridad;
        vm.functionRespuesta = functionRespuesta;
        vm.functionContrasena = funcitonContrasena;
        vm.functionConfirmarContrasena = functionConfirmarContrasena;  
        vm.DisabledEmail = false;
        vm.DisabledConsultar = false; 
        vm.DisabledActualizar = true;
        vm.DisabledEliminar = true; 
        vm.FunctionPreguntaSeguridad = FunctionPreguntaSeguridad;
        vm.nombre1 = "" ;
        vm.nombre2 = "";
        vm.apellido1 = "";
        vm.apellido2 = "" ;
        vm.telefonoFijo = "" ;
        vm.telefonoMovil = ""; 
        vm.email = "";
        vm.preguntaSeguridad = "";
        vm.respuesta = "";
        vm.contrasena = "";
        vm.confirmarContrasena = ""; 
        vm.FunctionRol = FunctionRol;
       
                    

        function FunctionPreguntaSeguridad(){
            if(vm.preguntaSeguridad != undefined || vm.preguntaSeguridad != '1' ){
              vm.mensajePreguntaSeguridad   = "";
              return;
          }

        }   


       
        function FunctionRol(){
            if(vm.rol != undefined || vm.rol != '0' ){
              vm.mensajeRol   = "";
              return;
            }

        } 
    
                
            
        function functionNombre1(){
            if(vm.nombre1.length > 0){
               vm.mensajeNombre1 = "";
            }        

        }  


        function functionNombre2(){


        } 


        function functionApellido1(){
            if(vm.apellido1.length > 0){
              vm.mensajeApellido1 = "";
            } 
        } 



        function functionapellido2(){
            if(vm.apellido2.length > 0){
              vm.mensajeapellido2 = "";
            }     

        } 



        function functionTelefonoFijo(){
            if(vm.telefonoFijo.length > 0){
              vm.mensajeTelefonoFijo = "";
              vm.mensajeTelefonoMovil= "";
            }     

        } 



        function functionTelefonoMovil(){
            if(vm.telefonoMovil.length > 0){
              vm.mensajeTelefonoFijo = "";
              vm.mensajeTelefonoMovil= "";
            }      

        } 


        function functionEmail(){
            if(vm.email.length > 0){
               vm.mensajeEmail = "";
              
            }      

        }


        function functionPreguntaSeguridad(){
            if(vm.preguntaSeguridad.length > 0){
              vm.mensajePreguntaSeguridad= "";
            }     

        }


        function functionRespuesta(){
            if(vm.respuesta.length > 0){
              vm.mensajeRespuesta= "";
            }   

        }



       function funcitonContrasena(){
          if(vm.contrasena.length > 0){
              vm.mensajeContrasena= "";
           }      

        }


        function functionConfirmarContrasena(){
           if(vm.confirmarContrasena.length > 0){
              vm.mensajeConfirmarContrasena= "";

             if(vm.contrasena !=  vm.confirmarContrasena)   {
                vm.mensajeConfirmarContrasena   = "La confirmación no coincide con la contraseña";
             } 
           }



        }


     function actualizarUsuario() { 
          

          if(vm.nombre1 == undefined || vm.nombre1 == '' ){
               vm.mensajeNombre1   = "Debes ingresar un válido para este campo";
               return;

           }else if(vm.apellido1 == undefined || vm.apellido1 == '' ){
              vm.mensajeApellido1   = "Debes ingresar un válido para este campo";
              return;
          }else if(vm.telefonoFijo == undefined || vm.telefonoFijo == ''  && (vm.telefonoMovil == undefined || vm.telefonoMovil == '') ){
              vm.mensajeTelefonoFijo   = "Debes ingresar un número de teléfono para fijo o para móvil";
              vm.mensajeTelefonoMovil   = "Debes ingresar un número de teléfono para fijo o para móvil";
              return;
          }else if(vm.email == undefined || vm.email == '' ){
              vm.mensajeEmail   = "Debes ingresar un válido para este campo";
              return;
          }else if(!/^\w+([\.\+\-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(vm.email)){
              vm.mensajeEmail   = "El correo no es válido";
              return;
          }else if(vm.preguntaSeguridad == undefined || vm.preguntaSeguridad == '1' ){
              vm.mensajePreguntaSeguridad   = "Debes seleccionar una pregunta ";
              return;
          }else if(vm.respuesta == undefined || vm.respuesta == '' ){
              vm.mensajeRespuesta   = "Debes ingresar un válido para este campo";
              return;
          }else if(vm.contrasena == undefined || vm.contrasena == '' ){
              vm.mensajeContrasena   = "Debes ingresar un válido para este campo";
              return;
          }else if(vm.confirmarContrasena == undefined || vm.confirmarContrasena == '' ){
              vm.mensajeConfirmarContrasena   = "Debes ingresar un válido para este campo";
              return;
          }else if(vm.confirmarContrasena !=  vm.confirmarContrasena  ){
              vm.mensajeConfirmarContrasena   = "La confirmación no coincide con la contraseña";
              return;
          }else if(vm.rol == undefined || vm.rol == '0' ){
              vm.mensajeRol  = "Debes seleccionar un Rol ";
              return;
          }





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
                    "rol" : vm.rol   
                    }        
             vm.modalShown2 = true;
               console.log(JSON.stringify(requestJson));

            UsuarioServices.actualizarUsuario(requestJson).then(function(data){
                debugger;
            if(data.resultado[0].codRespuesta == "200") {
               vm.nombre1 = '';
               vm.nombre2 ='';
               vm.apellido1 = '';
               vm.apellido2 = '';
               vm.telefonoFijo =  '';
               vm.telefonoMovil = ''; 
               vm.email = '';
               vm.preguntaSeguridad = '';
               vm.respuesta = '';
               vm.contrasena = '';
               vm.confirmarContrasena = '';

                $mdDialog.show(
                  $mdDialog.alert()
                     .parent(angular.element(document.querySelector('#dialogContainer')))
                     .clickOutsideToClose(true)
                     .title('Actualizar usuario')
                     .textContent('Usuario actualizado')
                     .ariaLabel('Usuario actualizado')
                     .ok('Cerrar')                     
               );


                     vm.DisabledEmail = false;
                     vm.DisabledConsultar = false; 
                     vm.DisabledActualizar = true;
                     vm.DisabledEliminar = true;
               
         }else if(data.resultado[0].codRespuesta == "203"){
                $mdDialog.show(
                  $mdDialog.alert()
                     .parent(angular.element(document.querySelector('#dialogContainer')))
                     .clickOutsideToClose(true)
                     .title('Actualizar usuario')
                     .textContent('Usuario no actualizado, Contraseña y confirmación no coinciden')
                     .ariaLabel('Usuario no actualizado')
                     .ok('Cerrar')
                     
               );
            }  else {
                 $mdDialog.show(
                  $mdDialog.alert()
                     .parent(angular.element(document.querySelector('#dialogContainer')))
                     .clickOutsideToClose(true)
                     .title('Actualizar usuario')
                     .textContent('Usuario no actualizado')
                     .ariaLabel('Usuario no actualizado')
                     .ok('Cerrar')
                     
               );
            } 


       
           });
     }


     function consultarUsuario(){
            if(vm.email == undefined  || vm.email == ''){
                   vm.mensajeEmail = "Debes ingresar un email para consultar";
                   return;
             }  


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
                    "rol" : vm.rol     
                    }      
             UsuarioServices.consultarUsuario(requestJson).then(function(data){
                if(data.resultado[0].codRespuesta == "200") { 
                     $mdDialog.show(
                       $mdDialog.alert()
                       .parent(angular.element(document.querySelector('#dialogContainer')))
                       .clickOutsideToClose(true)
                       .title('Consultar usuario')
                       .textContent('Usuario consultado')
                       .ariaLabel('Usuario consultado')
                       .ok('Cerrar')                     
                      );

                     vm.nombre1 = data.resultado[0].nombre1;
                     vm.nombre2 = data.resultado[0].nombre2;
                     vm.apellido1 = data.resultado[0].apellido1;                  
                     vm.apellido2 =  data.resultado[0].apellido2;
                     vm.telefonoFijo = data.resultado[0].telefonoFijo;
                     vm.telefonoMovil = data.resultado[0].telefonomovil;                    
                     vm.preguntaSeguridad = data.resultado[0].pregunta;
                     vm.respuesta = data.resultado[0].respuesta;
                     vm.contrasena = data.resultado[0].contrasena;
                     vm.confirmarContrasena  =  data.resultado[0].contrasena;
                     vm.rol  =  data.resultado[0].rol;


                     vm.DisabledEmail = true;
                     vm.DisabledConsultar = true; 
                     vm.DisabledActualizar = false;
                     vm.DisabledEliminar = false; 

                }else {
                      $mdDialog.show(
                        $mdDialog.alert()
                       .parent(angular.element(document.querySelector('#dialogContainer')))
                       .clickOutsideToClose(true)
                       .title('Consultar usuario')
                       .textContent('Usuario no encontrado')
                       .ariaLabel('Verifique el email del usuario')
                       .ok('Cerrar')                     
                      );

                }            
             });
     } 


      function eliminarUsuario(){
            if(vm.email == undefined  || vm.email == ''){
                   vm.mensajeEmail = "Debes ingresar un email para consultar";
                   return;
             }       

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
                    "rol" : vm.rol   
                    }      
             UsuarioServices.eliminarUsuario(requestJson).then(function(data){
                debugger;
                if(data.resultado[0].codRespuesta == "200") { 
                     $mdDialog.show(
                       $mdDialog.alert()
                       .parent(angular.element(document.querySelector('#dialogContainer')))
                       .clickOutsideToClose(true)
                       .title('Eliminar usuario')
                       .textContent('!Usuario eliminado exitósamente¡')
                       .ariaLabel('!Usuario eliminado exitósamente¡')
                       .ok('Cerrar')                     
                      );


                     vm.nombre1 = "";
                     vm.nombre2 = "";
                     vm.apellido1 = "";
                     vm.apellido2 =  "";
                     vm.telefonoFijo = "";
                     vm.telefonoMovil = "";                    
                     vm.preguntaSeguridad = "";
                     vm.respuesta = "";
                     vm.contrasena = "";
                     vm.confirmarContrasena  = "";
 
                 
                     vm.DisabledEmail = false;
                     vm.DisabledConsultar = false; 
                     vm.DisabledActualizar = true;
                     vm.DisabledEliminar = true;

                }else {
                      $mdDialog.show(
                        $mdDialog.alert()
                       .parent(angular.element(document.querySelector('#dialogContainer')))
                       .clickOutsideToClose(true)
                       .title('Eliminar Usuario')
                       .textContent('Usuario no eliminado')
                       .ariaLabel('Usuario no eliminado')
                       .ok('Cerrar')                     
                      );

                }            
             });
     } 
}        
    
})();