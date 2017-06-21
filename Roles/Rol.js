(function() {
    'use strict';

    angular
    .module('starter',['ngMaterial'])
    .controller('rolController', rolController);
 //    registrarUsuarioController.$inject = ['registarUsuarioServices'];

    function rolController($scope, $mdDialog,rolServices) {
        var vm = this;
             
        vm.registrar = registrar;
        vm.consultar = consultar;
        vm.actualizar = actualizar;
        vm.eliminar = eliminar;
        vm.idDisabled = false;
        vm.registrarDisabled = false;
        vm.consultarDisabled = false; 
        vm.actualizarDisabled = true;
        vm.eliminarDisabled = true; 
        vm.mensajeRol ="";
        vm.mensajeNombre = "";
        vm.mensajeDescripcion = "";
        vm.mensajeFormularios = "";
        vm.mensajeFuncionalidades = "";
        vm.functionRol = functionRol;
        vm.functionNombre = functionNombre;
        vm.functionDescripcion = functionDescripcion;
        vm.functionFormularios = functionFormularios;
        vm.funtionFuncionalidades = funtionFuncionalidades;


        function functionRol(){
             if(vm.idRol.length > 0){
               vm.mensajeRol ="";
             }
        }

        function functionNombre(){
             if(vm.nombre.length > 0){
               vm.mensajeNombre ="";
             }
        }


        function functionDescripcion(){
             if(vm.descripcion.length > 0){
               vm.mensajeDescripcion ="";
             }
        }



        function functionFormularios(){
             if(vm.formularios.length > 0){
               vm.mensajeFormularios ="";
             }
        }


        function funtionFuncionalidades(){
             if(vm.funcionalidades.length > 0){
               vm.mensajeFuncionalidades ="";
             }
        }



        function registrar(){ 
              if(vm.idRol == undefined  || vm.idRol  == ''){
                   vm.mensajeRol = "Debes ingresar un valido para este campo";
                   return;
              }

             if(vm.nombre == undefined  || vm.nombre  == ''){
                   vm.mensajeNombre = "Debes ingresar un valido para este campo";
                    return;
              }


              if(vm.descripcion == undefined  || vm.descripcion  == ''){
                   vm.mensajeDescripcion = "Debes ingresar un valido para este campo";
                    return;
              }


             if(vm.formularios == undefined  || vm.formularios  == ''){
                   vm.mensajeFormularios = "Debes ingresar un valido para este campo";
                    return;
              }


             if(vm.funcionalidades == undefined  || vm.funcionalidades  == ''){
                   vm.mensajeFuncionalidades = "Debes ingresar un valido para este campo";
                    return;
              }  
  

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
                       $mdDialog.show(
                       $mdDialog.alert()
                       .parent(angular.element(document.querySelector('#dialogContainer')))
                       .clickOutsideToClose(true)
                       .title('Registrar rol')
                       .textContent('!Se registró el Rol exitósamente¡')
                       .ariaLabel('!Se registró el Rol exitósamente¡')
                       .ok('Cerrar')                     
                      );
                      
                     vm.idRol = "",
                     vm.nombre = "",
                     vm.descripcion = "",
                     vm.formularios = "",
                    vm.funcionalidades  = ""

                }else{
                       $mdDialog.show(
                       $mdDialog.alert()
                       .parent(angular.element(document.querySelector('#dialogContainer')))
                       .clickOutsideToClose(true)
                       .title('Registrar rol')
                       .textContent('Rol no registrado')
                       .ariaLabel('Rol no registrado')
                       .ok('Cerrar')                     
                      );
                }           
             });
        } 


        function actualizar(){ 

              if(vm.nombre == undefined  || vm.nombre  == ''){
                   vm.mensajeNombre = "Debes ingresar un valido para este campo";
                    return;
              }


              if(vm.descripcion == undefined  || vm.descripcion  == ''){
                   vm.mensajeDescripcion = "Debes ingresar un valido para este campo";
                    return;
              }


             if(vm.formularios == undefined  || vm.formularios  == ''){
                   vm.mensajeFormularios = "Debes ingresar un valido para este campo";
                    return;
              }


             if(vm.funcionalidades == undefined  || vm.funcionalidades  == ''){
                   vm.mensajeFuncionalidades = "Debes ingresar un valido para este campo";
                    return;
              } 

          var requestJson = {
                    "idRol" : vm.idRol,
                    "nombre" : vm.nombre,
                    "descripcion" : vm.descripcion,
                    "formularios" : vm.formularios,
                    "funcionalidades" : vm.funcionalidades                     
                    }
             rolServices.actualizarRol(requestJson).then(function(data){
                debugger;
                if(data.resultado[0].codRespuesta == "200") {     
                       $mdDialog.show(
                       $mdDialog.alert()
                       .parent(angular.element(document.querySelector('#dialogContainer')))
                       .clickOutsideToClose(true)
                       .title('Registrar rol')
                       .textContent('!Se actualizó el Rol exitósamente¡')
                       .ariaLabel('!Se actualizó el Rol exitósamente¡')
                       .ok('Cerrar')                     
                      );

                     vm.idRol = "",
                     vm.nombre = "",
                     vm.descripcion = "",
                     vm.formularios = "",
                     vm.funcionalidades  = ""
 
         
                     vm.idDisabled = false;
                     vm.registrarDisabled = false;
                     vm.consultarDisabled = false; 
                     vm.actualizarDisabled = true;
                     vm.eliminarDisabled = true; 
                }else{
                       $mdDialog.show(
                       $mdDialog.alert()
                       .parent(angular.element(document.querySelector('#dialogContainer')))
                       .clickOutsideToClose(true)
                       .title('Registrar rol')
                       .textContent('Rol no actualizado')
                       .ariaLabel('Rol no actualizado')
                       .ok('Cerrar')                     
                      );
                }           
             });
        } 


        function consultar(){
            if(vm.idRol == undefined  || vm.idRol  == ''){
                   vm.mensajeRol = "Debes ingresar un id para consultar";
                   return;
             }
       

           var requestJson = {
                    "idRol" : vm.idRol,
                    "nombre" : vm.nombre,
                    "descripcion" : vm.descripcion,
                    "formularios" : vm.formularios,
                    "funcionalidades" : vm.funcionalidades                     
                    }
             rolServices.consultarRol(requestJson).then(function(data){
                debugger;
                if(data.resultado[0].codRespuesta == "200") { 
                     $mdDialog.show(
                       $mdDialog.alert()
                       .parent(angular.element(document.querySelector('#dialogContainer')))
                       .clickOutsideToClose(true)
                       .title('Consultar rol')
                       .textContent('Rol consultado')
                       .ariaLabel('Rol consultado')
                       .ok('Cerrar')                     
                      );
 
                     vm.idRol = data.resultado[0].idRol,
                     vm.nombre = data.resultado[0].nombre,
                     vm.descripcion =  data.resultado[0].descripcion,
                     vm.formularios = data.resultado[0].formularios, 
                     vm.funcionalidades = data.resultado[0].funcionalidades,   
                     vm.idDisabled = true;
                     vm.actualizarDisabled = false;
                     vm.eliminarDisabled = false;

                     vm.registrarDisabled = true;
                     vm.consultarDisabled = true; 

                }else {
                      $mdDialog.show(
                        $mdDialog.alert()
                       .parent(angular.element(document.querySelector('#dialogContainer')))
                       .clickOutsideToClose(true)
                       .title('Consultar rol')
                       .textContent('Rol no encontrado')
                       .ariaLabel('Verifique el id del rol')
                       .ok('Cerrar')                     
                      );

                }            
             });
        } 



        function eliminar(){
         

           var requestJson = {
                    "idRol" : vm.idRol,
                    "nombre" : vm.nombre,
                    "descripcion" : vm.descripcion,
                    "formularios" : vm.formularios,
                    "funcionalidades" : vm.funcionalidades                     
                    }
             rolServices.eliminarRol(requestJson).then(function(data){
                debugger;
                if(data.resultado[0].codRespuesta == "200") { 
                     $mdDialog.show(
                       $mdDialog.alert()
                       .parent(angular.element(document.querySelector('#dialogContainer')))
                       .clickOutsideToClose(true)
                       .title('Eliminar rol')
                       .textContent('!Rol eliminado exitósamente¡')
                       .ariaLabel('!Rol eliminado exitósamente¡')
                       .ok('Cerrar')                     
                      );
   
                     vm.idDisabled = false;
                     vm.registrarDisabled = false;
                     vm.consultarDisabled = false; 
                     vm.actualizarDisabled = true;
                     vm.eliminarDisabled = true; 

                }else {
                      $mdDialog.show(
                        $mdDialog.alert()
                       .parent(angular.element(document.querySelector('#dialogContainer')))
                       .clickOutsideToClose(true)
                       .title('Eliminar rol')
                       .textContent('Rol no eliminado')
                       .ariaLabel('Rol no eliminado')
                       .ok('Cerrar')                     
                      );

                }            
             });
        } 

       




             
 

  
}        
    
})();