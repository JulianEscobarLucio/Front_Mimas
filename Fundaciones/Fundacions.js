(function() {
    'use strict';

    angular
    .module('starter',['ngMaterial'])
    .controller('fundacionController', fundacionController);
    
    // fundacionController.$inject = ['fundacionServices'];

    function fundacionController($scope, $mdDialog,fundacionServices) {
        

        localStorage.setItem('userID', 'Mario');
        var user = localStorage.getItem('userID');
        


        var vm = this;
        
        
        vm.registrarFundacion = registrarFundacion;
        vm.actualizarFundacion = actualizarFundacion;
        vm.consultarFundacion = consultarFundacion;
        //vm.eliminarFundacion = confirmar; no se está usando
        vm.registrarDisabled = false;
        vm.consultarDisabled = false; 
        vm.actualizarDisabled = true;
        vm.eliminarDisabled = true;
        
        //obtener usuario del local storage
        vm.usuarioDisabled = true;
        vm.usuario = user;
        vm.estado = 'Activa';
        vm.fnEstado = fnEstado;  
        vm.showConfirm = showConfirm;      
        



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
        function fnTipoEntidad(){
            if(vm.tipoEntidad != undefined || vm.tipoEntidad != ''){
              vm.msjTipoEntidad = "";
            }     

        } 




      function  fnEstado(ev) {
          
          if (vm.estado == 'Activa') {

            var confirm = $mdDialog.confirm()
                .title('Cambiar Estado')
                .textContent('¿Está seguro de activar la fundación?')
                .ariaLabel('Lucky day')
                .targetEvent(ev)
                .ok('Activar Fundación')
                .cancel('Cancelar');

            $mdDialog.show(confirm).then(function() {
              vm.estado = 'Activa';
            }, function() {
              vm.estado = 'Inactiva';
              return;
            });

          }else if (vm.estado == 'Inactiva') {
            
            var confirm = $mdDialog.confirm()
                .title('Cambiar Estado')
                .textContent('¿Está seguro de inactivar la fundación?')
                .ariaLabel('Lucky day')
                .targetEvent(ev)
                .ok('Inactivar Fundación')
                .cancel('Cancelar');

            $mdDialog.show(confirm).then(function() {
              vm.estado = 'Inactiva';
            }, function() {
              vm.estado = 'Activa';
              return;
            });
            
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
          }else if(vm.tipoEntidad == undefined || vm.tipoEntidad == '' || vm.tipoEntidad == '1' || vm.tipoEntidad == 'Seleccione una Entidad.' ){
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
          vm.tipoEntidad = "1";
          vm.estado = 'Activa';
      }


     function registrarFundacion() { 

      

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
                    "tipoEntidad" :vm.tipoEntidad,
                    "estadoEntidad" : vm.estado
                    }  
                 
                 
             vm.modalShown2 = true;
               console.log(JSON.stringify(requestJson));


                fundacionServices.registrarFundacion(requestJson).then(function(data){
                

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

                           
                }else if (data.resultado[0].codRespuesta == "204") {
                    $mdDialog.show(
                      $mdDialog.alert()
                         .parent(angular.element(document.querySelector('#dialogContainer')))
                         .clickOutsideToClose(true)
                         .title('Error al Registrar Fundación')
                         .textContent('La fundación ya se encuentra registrada')
                         .ariaLabel('Fundación ya se encuentra registrada')
                         .ok('Cerrar')
                         
                   );

                    vm.actualizarDisabled = false;

                } 
                else {
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

        //}
      //});//fin fundacionServices.consultarFundacion

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
                    "tipoEntidad" :vm.tipoEntidad,
                    "estadoEntidad" :vm.estado
                    }  
    	 
    	   fundacionServices.actualizarFundacion(requestJson).then(function(data){
           
           
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
                    "tipoEntidad" :vm.tipoEntidad,
                    "estadoEntidad" :vm.estado
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
                 vm.tipoEntidad = data.resultado[0].tipoEntidad,
                 vm.estado = data.resultado[0].estadoEntidad

                 vm.DisabledIdentificacion2  = true;
                 vm.DisabledIdentificacion  = true;
                 vm.actualizarDisabled = false;
                 vm.eliminarDisabled = false;
                 vm.registrarDisabled = true;
                 vm.consultarDisabled = false; 


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





    function showConfirm (ev) {
          // Appending dialog to document.body to cover sidenav in docs app
          var confirm = $mdDialog.confirm()
                .title('Eliminar Fundación')
                .textContent('¿Está seguro de eliminar esta Fundación?')
                .ariaLabel('Lucky day')
                .targetEvent(ev)
                .ok('Si, deseo eliminar la Fundación')
                .cancel('Cancelar');

          $mdDialog.show(confirm).then(function() {
            eliminarFundacion();
          }, function() {

              limpiarCampos();
              vm.identificacion2 = "";
              vm.DisabledIdentificacion2  = false;
              vm.DisabledIdentificacion  = false;
              vm.registrarDisabled = false;
              vm.consultarDisabled = false; 
              vm.actualizarDisabled = true;
              vm.eliminarDisabled = true;
            return;
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
                    "tipoEntidad" :vm.tipoEntidad,
                    "estadoEntidad" :vm.estado
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

              limpiarCampos();
              vm.identificacion2 = "";

              vm.DisabledIdentificacion2  = false;
              vm.DisabledIdentificacion  = false;
              vm.registrarDisabled = false;
              vm.consultarDisabled = false; 
              vm.actualizarDisabled = true;
              vm.eliminarDisabled = true;

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

              limpiarCampos();
              vm.identificacion2 = "";
              vm.DisabledIdentificacion2  = false;
              vm.DisabledIdentificacion  = false;
              vm.registrarDisabled = false;
              vm.consultarDisabled = false; 
              vm.actualizarDisabled = true;
              vm.eliminarDisabled = true; 

            }            
         });
    } 

      
     
} //fin fundacion.js       
    
})();