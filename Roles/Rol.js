(function() {
    'use strict';

    angular
    .module('starter',['ngMaterial'])
    .controller('rolController', rolController);
 //    registrarUsuarioController.$inject = ['registarUsuarioServices'];

    function rolController($scope, $mdDialog,rolServices) {
        var vm = this;
             
        vm.registrar = registrar;

        function registrar(){
            
            
          var requestJson = {
                    "idRol" : vm.idRol,
                    "nombre" : vm.nombre,
                    "descripcion" : vm.descripcion,
                    "formularios" : vm.formularios,
                    "funcionalidades" : vm.funcionalidades                     
                    } 


             rolServices.registrarRol(requestJson).then(function(data){
                debugger;
                if(data.resultado[0].codRespuesta == "200") {
       
                }
            
             });        


        }        
 

  
}        
    
})();