(function() {
    'use strict';

    angular
    .module('starter',['ngMaterial'])
    .controller('fundacionController', fundacionController);
    //debugger;
    // fundacionController.$inject = ['fundacionServices'];

    function fundacionController($scope, $mdDialog,fundacionServices) {
        //debugger;

        localStorage.setItem('userID', 'Mario');
        var user = localStorage.getItem('userID');

        var vm = this;
        
        
        vm.registrarFundacion = registrarFundacion;
        vm.actualizarFundacion = actualizarFundacion;
        vm.consultarFundacion = consultarFundacion;
        vm.eliminarFundacion = confirmar;
        vm.registrarDisabled = false;
        vm.consultarDisabled = false; 
        vm.actualizarDisabled = true;
        vm.eliminarDisabled = true;
        
        //obtener usuario del local storage
        vm.usuarioDisabled = true;
        vm.usuario = user;
        



        vm.fnIdentificacion = fnIdentificacion;
        vm.msjIdentificacion = "";
        vm.fnRazonSocial = fnRazonSocial;
        vm.msjRazonSocial = "";
        vm.fnTelefonos = fnTelefonos;
        vm.tel = false;
        vm.msjTelFijo = "";
        vm.msjTelMovil = "";
        vm.fnEmail = fnEmail;
        vm.msjEmail = "";
        vm.fnDireccion = fnDireccion;
        vm.msjDireccion = "";
        vm.fnUsuario = fnUsuario;
        vm.msjUsuario = "";
        vm.fnTipoEntidad = fnTipoEntidad;
        vm.msjTipoEntidad = "";


        vm.fnIdentificacion2 = fnIdentificacion2;
        vm.DisabledIdentificacion = false;
        vm.camposObligatorios = false;





        function fnIdentificacion2(){
            if(vm.identificacion2.length > 0){
              vm.msjIdentificacion2 = "";
            }
        }

        
        function fnIdentificacion(){
            if(vm.identificacion.length > 0){
              vm.msjIdentificacion = "";
            } 
        } 
        function fnRazonSocial(){
            if(vm.razonSocial.length > 0){
              vm.msjRazonSocial = "";
            }     

        } 
        function fnTelefonos(){
            if(vm.telefono.length > 0 || vm.telefonoMovil.length > 0){

              vm.msjTelFijo = "";
              vm.msjTelMovil= "";
            }    

        } 
        function fnEmail(){
            if(vm.email.length > 0){
               vm.msjEmail = "";
            }      

        }
        function fnDireccion(){
            if(vm.direccion.length > 0){
              vm.msjDireccion= "";
            }     

        }
        function fnUsuario(){
            if(vm.usuario.length > 0){
              vm.msjUsuario= "";
            }     

        }



        
      function camposObligatorios(){

        //validaciones campos obligatorios
        if(vm.identificacion == undefined || vm.identificacion == '' ){
               vm.msjIdentificacion   = "Debes ingresar un valido para este campo";
               return false;
           }else if(vm.razonSocial == undefined || vm.razonSocial == '' ){
              vm.msjRazonSocial   = "Debes ingresar un valido para este campo";
              return false;
          }else if(vm.telefono == undefined || vm.telefono == ''){
              if (vm.telefonoMovil == undefined || vm.telefonoMovil == '') {
              vm.msjTelFijo   = "Debes ingresar un número de teléfono para fijo o para móvil";
              vm.msjTelMovil   = "Debes ingresar un número de teléfono para fijo o para móvil";
              return false;
            }
          }
          if(vm.email == undefined || vm.email == '' ){
              vm.msjEmail   = "Debes ingresar un valido para este campo";
              return false;
          }else if(!/^\w+([\.\+\-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(vm.email)){
              vm.msjEmail   = "El correo no es valido";
              return false;
          }else if(vm.direccion == undefined || vm.direccion == '' ){
              vm.msjDireccion   = "Debes ingresar un valido para este campo";
              return false;
          }
          else if(vm.usuario == undefined || vm.usuario == '' ){
              vm.msjUsuario  = "Debes ingresar un valido para este campo";
              return false;
          }else if(vm.tipoEntidad == undefined || vm.tipoEntidad == '' || vm.tipoEntidad == '1' ){
              vm.msjTipoEntidad  = "Debes ingresar un valido para este campo";
              return false;
          }
          return true;
      }

      function limpiarCampos(){

          vm.identificacion = "";
          vm.razonSocial = "";
          vm.telefono = "";
          vm.telefonoMovil = ""; 
          vm.email = "";
          vm.direccion = "";
          vm.usuario = localStorage.getItem('userID');
          vm.tipoEntidad = "";
      }

      function confirmar (){

        if (confirm('¿Estas seguro de eliminar esta Fundación?')){ 
           
            eliminarFundacion();

            limpiarCampos();
            vm.identificacion2 = "";

            vm.DisabledIdentificacion2  = false;
            vm.DisabledIdentificacion  = false;
            vm.registrarDisabled = false;
            vm.consultarDisabled = false; 
            vm.actualizarDisabled = true;
            vm.eliminarDisabled = true;

        } 
        else{

          limpiarCampos();
          vm.identificacion2 = "";
          vm.DisabledIdentificacion2  = false;
          vm.DisabledIdentificacion  = false;
          vm.registrarDisabled = false;
          vm.consultarDisabled = false; 
          vm.actualizarDisabled = true;
          vm.eliminarDisabled = true; 

          return;
        }
      }



     function registrarFundacion() { 

      //debugger;

        vm.camposObligatorios = camposObligatorios();
        if(vm.camposObligatorios == false){
          return;
        }

                 var requestJson = {
                    "identificacion" : vm.identificacion,
                    "razonSocial" : vm.razonSocial,                    
                    "telefonoFijo" : vm.telefono,
                    "telefonoMovil" : vm.telefonoMovil,
                    "email" : vm.email,
                    "direccion" : vm.direccion,
                    "usuario" :vm.usuario,
                    "tipoEntidad" :vm.tipoEntidad
                    }  
                 
                 
             vm.modalShown2 = true;
               console.log(JSON.stringify(requestJson));


            fundacionServices.consultarFundacion(requestJson).then(function(data){

              if(data.resultado[0].codRespuesta == "200") {
                $mdDialog.show(
                   $mdDialog.alert()
                   .parent(angular.element(document.querySelector('#dialogContainer')))
                   .clickOutsideToClose(true)
                   .title('Error al registrar Fundación')
                   .textContent('La Fundación ya existe')
                   .ariaLabel('La Fundación ya existe')
                   .ok('Cerrar')                     
                  );

                vm.actualizarDisabled = false;

              }
              else{

                fundacionServices.registrarFundacion(requestJson).then(function(data){
                //debugger;

                if(data.resultado[0].codRespuesta == "200") {                
                    $mdDialog.show(
                      $mdDialog.alert()
                         .parent(angular.element(document.querySelector('#dialogContainer')))
                         .clickOutsideToClose(true)
                         .title('Registrar Fundacion')
                         .textContent(' ¡  Se registró la Fundación exitósamente  ! ')
                         .ariaLabel(' ¡  Se registró la Fundación exitósamente  ! ')
                         .ok('Cerrar')
                          );

                    limpiarCampos();
                    vm.identificacion2 = "";
                    vm.actualizarDisabled = true;

                           
                }else{
                    $mdDialog.show(
                      $mdDialog.alert()
                         .parent(angular.element(document.querySelector('#dialogContainer')))
                         .clickOutsideToClose(true)
                         .title('Registrar Fundación')
                         .textContent('Fundación no registrada')
                         .ariaLabel('Fundación no registrada')
                         .ok('Cerrar')
                         
                   );
                }  
              }); //fin fundacionServices.registrarFundacion

        }
      }); //fin fundacionServices.consultarFundacion

   }
     
     
     
     
     
    function actualizarFundacion(){ 

        vm.camposObligatorios = camposObligatorios();
        if(vm.camposObligatorios == false){
          return;
        }


    	         var requestJson = {
                    "identificacion" : vm.identificacion,
                    "razonSocial" : vm.razonSocial,                    
                    "telefonoFijo" : vm.telefono,
                    "telefonoMovil" : vm.telefonoMovil,
                    "email" : vm.email,
                    "direccion" : vm.direccion,
                    "usuario" :vm.usuario,
                    "tipoEntidad" :vm.tipoEntidad
                    }  
    	 
    	   fundacionServices.actualizarFundacion(requestJson).then(function(data){
           //debugger;
           
           if(data.resultado[0].codRespuesta == "200") {     
                  $mdDialog.show(
                  $mdDialog.alert()
                  .parent(angular.element(document.querySelector('#dialogContainer')))
                  .clickOutsideToClose(true)
                  .title('Actualizar Fundación')
                  .textContent('¡ Se actualizó la Fundación exitósamente !')
                  .ariaLabel('¡ Se actualizó la Fundación exitósamente !')
                  .ok('Cerrar')                     
                 );

              
                limpiarCampos();
                vm.identificacion2 = "";

                vm.DisabledIdentificacion2  = false;
                vm.DisabledIdentificacion  = false;
                vm.registrarDisabled = false;
                vm.consultarDisabled = false; 
                vm.actualizarDisabled = true;
                vm.eliminarDisabled = true;
                
                
           }else{
                  $mdDialog.show(
                  $mdDialog.alert()
                  .parent(angular.element(document.querySelector('#dialogContainer')))
                  .clickOutsideToClose(true)
                  .title('Actualizar Fundación')
                  .textContent('Fundación no actualizada')
                  .ariaLabel('Fundación no actualizada')
                  .ok('Cerrar')                     
                 );
           }           
        });
   }




    function consultarFundacion(){


        if(vm.identificacion2 == undefined || vm.identificacion2 == '' ){
           vm.msjIdentificacion2   = "Debes ingresar una identificación";
           return;
        }
   

       var requestJson = {

                    "identificacion" : vm.identificacion2,
                    "razonSocial" : vm.razonSocial,                    
                    "telefonoFijo" : vm.telefono,
                    "telefonoMovil" : vm.telefonoMovil,
                    "email" : vm.email,
                    "direccion" : vm.direccion,
                    "usuario" :vm.usuario,
                    "tipoEntidad" :vm.tipoEntidad
                    }  

         fundacionServices.consultarFundacion(requestJson).then(function(data){
            

            if(data.resultado[0].codRespuesta == "200") { 
                 $mdDialog.show(
                   $mdDialog.alert()
                   .parent(angular.element(document.querySelector('#dialogContainer')))
                   .clickOutsideToClose(true)
                   .title('Consultar Fundación')
                   .textContent('Fundación consultada')
                   .ariaLabel('Fundación consultada')
                   .ok('Cerrar')                     
                  );

                 
                 vm.identificacion = vm.identificacion2,
                 vm.razonSocial = data.resultado[0].razonSocial,
                 vm.telefono =  data.resultado[0].telefonoFijo,
                 vm.telefonoMovil = data.resultado[0].telefonoMovil, 
                 vm.email = data.resultado[0].email,
                 vm.direccion = data.resultado[0].direccion,
                 vm.usuario = data.resultado[0].usuario,
                 vm.tipoEntidad = data.resultado[0].tipoEntidad

                 vm.DisabledIdentificacion2  = true;
                 vm.DisabledIdentificacion  = true;
                 vm.actualizarDisabled = false;
                 vm.eliminarDisabled = false;
                 vm.registrarDisabled = true;
                 vm.consultarDisabled = true; 


            }else {

                  $mdDialog.show(
                    $mdDialog.alert()
                   .parent(angular.element(document.querySelector('#dialogContainer')))
                   .clickOutsideToClose(true)
                   .title('Consultar Fundación')
                   .textContent('Fundación no encontrada')
                   .ariaLabel('Verifique la identificación de la entidad')
                   .ok('Cerrar')                     
                  );

            }            
         });
    } 



    function eliminarFundacion(){
     

               var requestJson = {
                    "identificacion" : vm.identificacion,
                    "razonSocial" : vm.razonSocial,                    
                    "telefonoFijo" : vm.telefono,
                    "telefonoMovil" : vm.telefonoMovil,
                    "email" : vm.email,
                    "direccion" : vm.direccion,
                    "usuario" :vm.usuario,
                    "tipoEntidad" :vm.tipoEntidad
                    }  

         fundacionServices.eliminarFundacion(requestJson).then(function(data){

            if(data.resultado[0].codRespuesta == "200") { 
                 $mdDialog.show(
                   $mdDialog.alert()
                   .parent(angular.element(document.querySelector('#dialogContainer')))
                   .clickOutsideToClose(true)
                   .title('Eliminar Fundación')
                   .textContent('¡ Fundación eliminada exitósamente !')
                   .ariaLabel('¡ Fundación eliminada exitósamente !')
                   .ok('Cerrar')                     
                  ); 

            }else {
                  $mdDialog.show(
                    $mdDialog.alert()
                   .parent(angular.element(document.querySelector('#dialogContainer')))
                   .clickOutsideToClose(true)
                   .title('Eliminar Fundación')
                   .textContent('Fundación no eliminada')
                   .ariaLabel('Fundación no eliminada')
                   .ok('Cerrar')                     
                  );

            }            
         });
    } 

      
     
} //fin fundacion.js       
    
})();