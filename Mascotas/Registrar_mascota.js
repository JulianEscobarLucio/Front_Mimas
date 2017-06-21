(function() {
    'use strict';

    angular
    .module('starter',['ngMaterial'])
    .controller('registrarUsuarioController', registrarUsuarioController);
 //    registrarUsuarioController.$inject = ['registarUsuarioServices'];

    function registrarMascotaController($scope, $mdDialog,registarMascotaServices) {
        var vm = this;
        vm.registrarMascota = registrarmascota;


     function registrarMascota() { 

                 var requestJson = {
                    "Id" : vm.Id,
                    "Nombre" : vm.Nombre,
                    "IdResponsable" : vm.IdResponsable,
                    "Especie" : vm.Especie,
                    "Raza" : vm.Raza,
                    "Genero" : vm.Genero, 
                    "Edad" : vm.Edad,
                    "Tamaño":  vm.Tamaño,
                    "Estado" :  vm.Estado,
                    "Caracteristicas" :vm.Caracteristicas,
                    "Vacunas" : vm.Vacunas,
                    "FechaN" : vm.FechaN,
                    "Señales" : vm.Señales,
                    "Color" : vm.Color,
                    "Colorojos" : vm.Colorojos,
                    "personalidad" : vm.personalidad,
                    "EstadoSalud" : vm.EstadoSalud
                    }        
             vm.modalShown2 = true;
               console.log(JSON.stringify(requestJson));

              registarMascotaServices.registrarMascota(requestJson).then(function(data){
                debugger;
            if(data.resultado[0].codRespuesta == "200") {                
                $mdDialog.show(
                  $mdDialog.alert()
                     .parent(angular.element(document.querySelector('#dialogContainer')))
                     .clickOutsideToClose(true)
                     .title('Registrar mascota')
                     .textContent('Mascota registrado')
                     .ariaLabel('Mascota registrado')
                     .ok('Cerrar')                     
               );
            }else{
                $mdDialog.show(
                  $mdDialog.alert()
                     .parent(angular.element(document.querySelector('#dialogContainer')))
                     .clickOutsideToClose(true)
                     .title('Registrar mascota')
                     .textContent('Mascota registrado')
                     .ariaLabel('Mascota registrado')
                     .ok('Cerrar') 
                     
               );
            }  
       });
   }
}        
    
})();