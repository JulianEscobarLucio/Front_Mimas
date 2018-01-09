(function() {
    'use strict';

    angular
    .module('starter',['ngMaterial','ngRoute','ngMask','ngMdIcons'])
    .controller('registrarUsuarioController',   function($scope, $mdDialog, registarUsuarioServices) {
        var vm = this;
        vm.registrarUsuario = registrarUsuario;
        vm.mensajeNombre1 = "";
        vm.mensajeNombre2 = "";
        vm.mensajeApellido1 = "";
        vm.mensajeApellido2 = "";
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
        vm.functionApellido2 =  functionApellido2;
        vm.functionTelefonoFijo =  functionTelefonoFijo;
        vm.functionTelefonoMovil =  functionTelefonoMovil;
        vm.functionEmail =  functionEmail;
        vm.functionPreguntaSeguridad = functionPreguntaSeguridad;
        vm.functionRespuesta = functionRespuesta;
        vm.functionContrasena = funcitonContrasena;
        vm.functionConfirmarContrasena = functionConfirmarContrasena;
         
     
        vm.nombre1 = '';
        vm.nombre2 ='';
        vm.apellido1 = '';
        vm.apellido2 = '';
        vm.telefonoFijo =  '';
        vm.telefonoMovil = '';
        vm.email = ''; 
        vm.respuesta = '';
        vm.contrasena = '';
        vm.confirmarContrasena = ''; 
        vm.loader = 'loaderStop';   


        function functionPreguntaSeguridad(){
            if(vm.preguntaSeguridad != undefined || vm.preguntaSeguridad != '1' ){
              vm.mensajePreguntaSeguridad   = "";
              return;
            }

        } 


                
            
        function functionNombre1(){
             var  expreg = /\s/;
            if(vm.nombre1.length > 0){
               vm.mensajeNombre1 = "";
            } 

            if(expreg.test(vm.nombre1)){
              vm.mensajeNombre1 = "No debe llevar espacios";
            }       
   
        }  


        function functionNombre2(){
            if(vm.nombre2.length > 0){
               vm.mensajeNombre1 = "";
            } 
            if(expreg.test(vm.nombre2)){
              vm.mensajeNombre1 = "No debe llevar espacios";
            } 

        } 


        function functionApellido1(){
            if(vm.apellido1.length > 0){
              vm.mensajeApellido1 = "";
            } 
            if(expreg.test(vm.apellido1)){
              vm.mensajeApellido1 = "No debe llevar espacios";
            }
        } 



        function functionApellido2(){
            if(vm.apellido2.length > 0){
              vm.mensajeApellido2 = "";
            }
            if(expreg.test(vm.apellido2)){
              vm.mensajeApellido2 = "No debe llevar espacios";
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


     function registrarUsuario() { 
       
        //  var expreg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[`~!@#$%^&*()_°¬|+\-=?;:'",.<>\{\}\[\]\\\/])[A-Za-z\d`~!@#$%^&*()_°¬|+\-=?;:'",.<>\{\}\[\]\\\/]{8,12}$/;
        //   if(vm.nombre1 == undefined || vm.nombre1 == '' ){
        //        vm.mensajeNombre1   = "Debes ingresar un válido para este campo";
        //        return;
        //    }else if(/\s/.test(vm.nombre1)){
        //        vm.mensajeNombre1   = "No debe llevar espacios";
        //        return;
        //    }else if(/\s/.test(vm.nombre2)){
        //        vm.mensajeNombre2   = "No debe llevar espacios";
        //        return;
        //    }else if(vm.apellido1 == undefined || vm.apellido1 == '' ){
        //       vm.mensajeApellido1   = "Debes ingresar un válido para este campo";
        //       return;
        //   }else if(/\s/.test(vm.apellido1)){
        //        vm.mensajeApellido1   = "No debe llevar espacios";
        //        return;
        //   }else if(/\s/.test(vm.apellido2)){
        //        vm.mensajeApellido2   = "No debe llevar espacios";
        //        return;
        //   }else if(vm.telefonoFijo == undefined || vm.telefonoFijo == ''  && (vm.telefonoMovil == undefined || vm.telefonoMovil == '') ){
        //       vm.mensajeTelefonoFijo   = "Debes ingresar un número de teléfono para fijo o para móvil";
        //       vm.mensajeTelefonoMovil   = "Debes ingresar un número de teléfono para fijo o para móvil";
        //       return;
        //   }else if(vm.email == undefined || vm.email == '' ){
        //       vm.mensajeEmail   = "Debes ingresar un válido para este campo";
        //       return;
        //   }else if(!/^\w+([\.\+\-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(vm.email)){
        //       vm.mensajeEmail   = "El correo no es válido";
        //       return;
        //   }else if(vm.preguntaSeguridad == undefined || vm.preguntaSeguridad == '1' ){
        //       vm.mensajePreguntaSeguridad   = "Debes seleccionar una pregunta ";
        //       return;
        //   }else if(vm.respuesta == undefined || vm.respuesta == '' ){
        //       vm.mensajeRespuesta   = "Debes ingresar un válido para este campo";
        //       return;
        //   }else if(vm.contrasena == undefined || vm.contrasena == '' ){
        //       vm.mensajeContrasena   = "Debes ingresar un válido para este campo";
        //       return;
        //   }else if(!expreg.test(vm.contrasena)){
        //        vm.mensajeContrasena   = "La contraseña no cumple con las póliticas";
        //       return;
        //   }else if(vm.confirmarContrasena == undefined || vm.confirmarContrasena == '' ){
        //       vm.mensajeConfirmarContrasena   = "Debes ingresar un válido para este campo";
        //       return;
        //   }else if(vm.confirmarContrasena !=  vm.confirmarContrasena  ){
        //       vm.mensajeConfirmarContrasena   = "La confirmación no coincide con la contraseña";
        //       return;
        //   }else if(!expreg.test(vm.confirmarContrasena)){
        //       vm.mensajeConfirmarContrasena   = "La contraseña no cumple con las póliticas";
        //       return;
        //   }
          vm.loader = 'loaderRun';
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
                    "contrasena" :vm.contrasena         
                    }        
             vm.modalShown2 = true;
               console.log(JSON.stringify(requestJson));

              registarUsuarioServices.registrarUsuario(requestJson).then(function(data){
                debugger;
            try {    
                if(data.resultado[0].codRespuesta == "200") {
                vm.nombre1 = '',
                vm.nombre2 ='',
                vm.apellido1 = '',
                vm.apellido2 = '',
                vm.telefonoFijo =  '',
                vm.telefonoMovil = '', 
                vm.email = '',
                vm.preguntaSeguridad = '1',
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
                        .textContent('El usuario no ha sido registrado, Usuario existente')
                        .ariaLabel('Usuario existente')
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
            
            
        }catch(err) {
           console.log(err);
        }finally {
            vm.loader = 'loaderStop';
        }
       });
   }
} );

         
    
})();