(function() {
    'use strict';

    angular
    .module('starter',['ngMaterial'])
    .controller('registrarController', registrarFundacionController);
    debugger;
 //    registrarFundacionController.$inject = ['registarFundacionServices'];

    function registrarFundacionController($scope, $mdDialog,registarFundacionServices) {
        debugger;
        var vm = this;
        
        vm.registrarFundacion = registrarFundacion;
        vm.actualizarFundacion = actualizarFundacion;
        vm.consultarFundacion = consultarFundacion;
        vm.eliminarFundacion = eliminarFundacion;
        vm.registrarDisabled = false;
        vm.consultarDisabled = false; 
        vm.actualizarDisabled = true;
        vm.eliminarDisabled = true;
        


     function registrarFundacion() { 

                 var requestJson = {
                    "identificacion" : vm.identificacion,
                    "razonSocial" : vm.razonSocial,
                    "telefonoFijo" : vm.telefonoFijo,
                    "telefonomovil" : vm.telefonoMovil, 
                    "email" : vm.email,
                    "direccion" : vm.direccion,
                    "usuario" :vm.usuario,
                    "tipoEntidad" :vm.tipoEntidad
                    }  
                 
                 
             vm.modalShown2 = true;
               console.log(JSON.stringify(requestJson));

              registarFundacionServices.registrarFundacion(requestJson).then(function(data){
                debugger;
            if(data.resultado[0].codRespuesta == "200") {                
                $mdDialog.show(
                  $mdDialog.alert()
                     .parent(angular.element(document.querySelector('#dialogContainer')))
                     .clickOutsideToClose(true)
                     .title('Registrar Fundacion')
                     .textContent('!Se registró la Fundación exitósamente¡')
                     .ariaLabel('!Se registró la Fundación exitósamente¡')
                     .ok('Cerrar')
                      );
                      
                     vm.idRol = "",
                     vm.identificacion = "",
                     vm.razonSocial = "",
                     vm.telefonoFijo = "",
                     vm.telefonoMovil = "", 
                     vm.email = "",
                     vm.direccion = "",
                     vm.usuario = "",
                     vm.tipoEntidad = ""
                    	 
            }else{
                $mdDialog.show(
                  $mdDialog.alert()
                     .parent(angular.element(document.querySelector('#dialogContainer')))
                     .clickOutsideToClose(true)
                     .title('Registrar Fundacion')
                     .textContent('Fundacion no registrada')
                     .ariaLabel('Fundacion no registrada')
                     .ok('Cerrar')
                     
               );
            }  
       });
   }
     
     
     
     
     
     function actualizar(){ 

    	 
    	 var requestJson = {
    			 "identificacion" : vm.identificacion,
                 "razonSocial" : vm.razonSocial,
                 "telefonoFijo" : vm.telefonoFijo,
                 "telefonomovil" : vm.telefonoMovil, 
                 "email" : vm.email,
                 "direccion" : vm.direccion,
                 "usuario" :vm.usuario,
                 "tipoEntidad" :vm.tipoEntidad                     
               }
    	 registarFundacionServices.actualizarFundacion(requestJson).then(function(data){
           debugger;
           
           if(data.resultado[0].codRespuesta == "200") {     
                  $mdDialog.show(
                  $mdDialog.alert()
                  .parent(angular.element(document.querySelector('#dialogContainer')))
                  .clickOutsideToClose(true)
                  .title('Actualizar Fundación')
                  .textContent('!Se actualizó la Fundación exitósamente¡')
                  .ariaLabel('!Se actualizó la Fundación exitósamente¡')
                  .ok('Cerrar')                     
                 );

                  vm.idRol = "",
                  vm.identificacion = "",
                  vm.razonSocial = "",
                  vm.telefonoFijo = "",
                  vm.telefonoMovil = "", 
                  vm.email = "",
                  vm.direccion = "",
                  vm.usuario = "",
                  vm.tipoEntidad = ""

    
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
     
     
     
     
     
     
     
     
     
}        
    
})();