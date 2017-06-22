(function() {
    'use strict';

    angular
    .module('starter',['ngMaterial'])
    .controller('fundacionController', fundacionController);
    debugger;
 //    registrarFundacionController.$inject = ['registarFundacionServices'];

    function fundacionController($scope, $mdDialog,fundacionServices) {
        debugger;
        var vm = this;
        
        vm.registrarFundacion = registrarFundacion;
        vm.actualizarFundacion = actualizarFundacion;
       // vm.consultarFundacion = consultarFundacion;
       // vm.eliminarFundacion = eliminarFundacion;
        vm.registrarDisabled = false;
        vm.consultarDisabled = false; 
        vm.actualizarDisabled = true;
        vm.eliminarDisabled = true;
        


     function registrarFundacion() { 

                 var requestJson = {
                    "identificacion" : vm.identificacion,
                    "razonSocial" : vm.razonSocial,                    
                    "telefonoMovil" : vm.telefonoMovil,
                    "telefonoFijo" : vm.telefono, 
                    "email" : vm.email,
                    "direccion" : vm.direccion,
                    "usuario" :vm.usuario,
                    "tipoEntidad" :vm.tipoEntidad
                    }  
                 
                 
             vm.modalShown2 = true;
               console.log(JSON.stringify(requestJson));

              fundacionServices.registrarFundacion(requestJson).then(function(data){
                debugger;

            if(data.resultado[0].codRespuesta == "200") {                
                $mdDialog.show(
                  $mdDialog.alert()
                     .parent(angular.element(document.querySelector('#dialogContainer')))
                     .clickOutsideToClose(true)
                     .title('Registrar Fundacion')
                     .textContent(' !  Se registró la Fundación exitósamente  ¡ ')
                     .ariaLabel(' !  Se registró la Fundación exitósamente  ¡ ')
                     .ok('Cerrar')
                      );
                      
                    
                     vm.identificacion = "";
                     vm.razonSocial = "";
                     vm.telefono = "";
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
                     .title('Registrar Fundación')
                     .textContent('Fundación no registrada')
                     .ariaLabel('Fundación no registrada')
                     .ok('Cerrar')
                     
               );
            }  
       });
   }
     
     
     
     
     
     function actualizarFundacion(){ 

    	 
    	 var requestJson = {
    			       "identificacion" : vm.identificacion,
                 "razonSocial" : vm.razonSocial,
                 "telefonoFijo" : vm.telefono,
                 "telefonomovil" : vm.telefonoMovil, 
                 "email" : vm.email,
                 "direccion" : vm.direccion,
                 "usuario" :vm.usuario,
                 "tipoEntidad" :vm.tipoEntidad                     
               }

    	   fundacionServices.actualizarFundacion(requestJson).then(function(data){
           debugger;
           
           if(data.resultado[0].codRespuesta == "200") {     
                  $mdDialog.show(
                  $mdDialog.alert()
                  .parent(angular.element(document.querySelector('#dialogContainer')))
                  .clickOutsideToClose(true)
                  .title('Actualizar Fundación')
                  .textContent('! Se actualizó la Fundación exitósamente ¡')
                  .ariaLabel('! Se actualizó la Fundación exitósamente ¡')
                  .ok('Cerrar')                     
                 );

              
                  vm.identificacion = "",
                  vm.razonSocial = "",
                  vm.tele = "",
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