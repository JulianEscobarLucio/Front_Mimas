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
                     .textContent('Fundacion registrada')
                     .ariaLabel('Fundacion registrada')
                     .ok('Cerrar')                     
               );
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
}        
    
})();