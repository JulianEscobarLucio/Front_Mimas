    (function() {
    'use strict';

    angular
    .module('starter',['ngMaterial','ngMessages'])
    .controller('registrarMascotaController', registrarMascotaController);
 //    registrarUsuarioController.$inject = ['registarUsuarioServices'];

    function registrarMascotaController($scope, $mdDialog,registarMascotaServices, $timeout) {
        var vm = this;
        vm.FechaN = "";
        vm.isOpen = false;


             
        vm.registrar = registrar;
        vm.consultar = consultar;
        vm.actualizar = actualizar;
        vm.eliminar = eliminar;
        vm.idDisabled = false;
        vm.registrarDisabled = false;
        vm.consultarDisabled = false; 
        vm.actualizarDisabled = true;
        vm.eliminarDisabled = true; 
        vm.mensajeId ="";
        vm.mensajeNombre= "";
        vm.mensajeIdResponsable = "";
        vm.mensajeEspecie = "";
        vm.mensajeRaza = "";
        vm.mensajeGenero = "";
        vm.mensajeEdad = "";
        vm.mensajeTamano = "";
        vm.mensajeEstado = "";
        vm.mensajeCaracteristicas = "";
        vm.mensajeVacunas = "";
        vm.mensajeFechaN = "";
        vm.mensajeSenales = "";
        vm.mensajeColor = "";
        vm.mensajeColorojos = "";
        vm.mensajepersonalidad = "";
        vm.mensajeEstadoSalud = "";
        vm.mensajeFecha = "";
         vm.functionId2 = functionId2;
        vm.functionNombre = functionNombre;
        vm.functionResponsable = functionResponsable;
        vm.functionEspecie = functionEspecie;
        vm.functionRaza = functionRaza;
        vm.functionGenero = functionGenero;
        vm.functionEdad = functionEdad;
        vm.functionTamano = functionTamano;
        vm.functionEstado = functionEstado;
        vm.functionCaracteristicas = functionCaracteristicas;      
        vm.functionFechaN = functionFechaN;
        vm.functionSenales = functionSenales;
        vm.functionColor = functionColor;
        vm.functionColorojos = functionColorojos;
        vm.functionPersonalidad = functionPersonalidad;
        vm.functionEstadoSalud = functionEstadoSalud;
        vm.showConfirm = showConfirm;
        vm.cancelar = cancelar;
        vm.DisabledCancelar = true;
        vm.IdResponsable = localStorage.getItem("user"); 
        vm.imagen = "";
        vm.fechaN = new Date();
   


       vm.thumbnail = {
         dataUrl: ''
       };
       vm.fileReaderSupported = window.FileReader != null;

       $scope.photoChanged = function(files){
          if (files != null) {
              debugger;
              var file = files[0];
              vm.imagen = file.name 
            if (vm.fileReaderSupported && file.type.indexOf('image') > -1) {
                $timeout(function() {
                    var fileReader = new FileReader();
                    fileReader.readAsDataURL(file);
                    fileReader.onload = function(e) {
                        $timeout(function(){
                           vm.thumbnail.dataUrl = e.target.result;
                        });
                    }
                });
            }
          }
        };



      function cancelar(){
        vm.consultarDisabled = false; 
        vm.actualizarDisabled = true;
        vm.DisabledCancelar = true;
        vm.eliminarDisabled = true;
        vm.idDisabled = false;
        vm.registrarDisabled = false;
        
        vm.Id2 = "";
        vm.nombre = "";
        vm.IdResponsable  = "";
        vm.Especie = "";
        vm.Raza = "";
        vm.Genero = "";   
        vm.Tamano = "";
        vm.Estado = "",
        vm.Caracteristicas = "";
        vm.Vacunas = "";
        vm.FechaN = "";
        vm.Senales = "";
        vm.Color = "";
        vm.Colorojos = "";
        vm.Personalidad = "";
        vm.EstadoSalud   = "" 

       } 

        

     function showConfirm (ev) {
          // Appending dialog to document.body to cover sidenav in docs app
          var confirm = $mdDialog.confirm()
                .title('Vas a eliminar una mascota')
                .textContent('Estás seguro que vas a eliminar esta mascota.')
                .ariaLabel('Lucky day')
                .targetEvent(ev)
                .ok('Aceptar')
                .cancel('Cancelar');

          $mdDialog.show(confirm).then(function() {
            vm.eliminar();
          }, function() {
            //$scope.status = 'You decided to keep your debt.';
          });
        };


 
      function functionId2(){
             if(vm.Id2.length > 0){
               vm.mensajeId2 ="";
             }
        }

        


        function functionNombre(){
             if(vm.nombre.length > 0){
               vm.mensajeNombre ="";
             }
        }

        
        function functionResponsable(){
             if(vm.IdResponsable.length > 0){
               vm.mensajeResponsable ="";
             }
        }

        function functionEspecie(){
             if(vm.Especie != '0'){
               vm.mensajeEspecie ="";
             }
        }
        

        function functionRaza(){
             if(vm.Raza.length > 0){
               vm.mensajeRaza ="";
             }
        }


        function functionGenero(){
             if(vm.Genero != '0'){
               vm.mensajeGenero ="";
             }
        }

        function functionEdad(){
             if(vm.Edad.length > 0){
               vm.mensajeEdad ="";
             }
        }

        function functionTamano(){
             if(vm.Tamano != '0'){
               vm.mensajeTamano ="";
             }
        }

        function functionEstado(){
             if(vm.Estado != '0'){
               vm.mensajeEstado ="";
             }
        }

        function functionCaracteristicas(){
             if(vm.Caracteristicas.length > 0){
               vm.mensajeCaracteristicas ="";
             }
        }
       

        function functionFechaN(){
             if(vm.FechaN.length > 0){
               vm.mensajeFechaN ="";
             }
        }

        function functionSenales(){
             if(vm.Senales.length > 0){
               vm.mensajeSenales ="";
             }
        }

        function functionColor(){
             if(vm.Color.length > 0){
               vm.mensajeColor ="";
             }
        }

        function functionColorojos(){
             if(vm.Colorojos.length > 0){
               vm.mensajeColorojos ="";
             }
        }

        function functionPersonalidad(){
             if(vm.Personalidad.length > 0){
               vm.mensajepersonalidad ="";
             }
        }

        function functionEstadoSalud(){
             if(vm.EstadoSalud.length > 0){
               vm.mensajeEstadoSalud ="";
             }
        }



        function registrar(){           
              console.log(vm.thumbnail.dataUrl);

             if(vm.fechaN > new Date()){
               vm.mensajeFecha = "La fecha debe ser menor o igual a la fecha actual";
               return;
             }


             if(vm.nombre == undefined  || vm.nombre  == ''){
                   vm.mensajeNombre = "Debes ingresar un dato válido para este campo";
                    return;
              }


              if(vm.IdResponsable == undefined  || vm.IdResponsable  == ''){
                   vm.mensajeResponsable = "Debes ingresar un dato válido para este campo";
                    return;
              }


             if(vm.Especie == undefined  || vm.Especie == '0'){
                   vm.mensajeEspecie = "Debes seleccionar una opción";
                    return;
              }


             if(vm.Genero == undefined  || vm.Genero == '0'){
                   vm.mensajeGenero = "Debes seleccionar una opción";
                    return;
              } 

                 
              if(vm.Tamano == undefined  || vm.Tamano == '0'){
                   vm.mensajeTamano = "Debes seleccionar una opción";
                    return;
              }


              if(vm.Estado == undefined  || vm.Estado == '0'){
                   vm.mensajeEstado = "Debes seleccionar una opción";
                    return;
              }


              if(vm.Caracteristicas == undefined  || vm.Caracteristicas == ''){
                   vm.mensajeCaracteristicas = "Debes ingresar un dato válido para este campo";
                    return;
              }


              if(vm.Raza == undefined  || vm.Raza == ''){
                   vm.mensajeRaza = "Debes ingresar un dato válido para este campo";
                    return;
              }


           /*   if(vm.FechaN == undefined  || vm.FechaN == ''){
                   vm.mensajeFechaN = "Debes ingresar un dato válido para este campo";
                    return;
              }*/

              if(vm.Senales == undefined  || vm.Senales == ''){
                   vm.mensajeSenales = "Debes ingresar un dato válido para este campo";
                    return;
              }

              if(vm.Color == undefined  || vm.Color == ''){
                   vm.mensajeColor= "Debes ingresar un dato válido para este campo";
                    return;
              }


              if(vm.Colorojos == undefined  || vm.Colorojos == ''){
                   vm.mensajeColorojos = "Debes ingresar un dato válido para este campo";  
                    return;
              }


              if(vm.Personalidad == undefined  || vm.Personalidad == ''){
                   vm.mensajepersonalidad = "Debes ingresar un dato válido para este campo";
                    return;
              }


              if(vm.EstadoSalud == undefined  || vm.EstadoSalud == ''){
                   vm.mensajeEstadoSalud = "Debes ingresar un dato válido para este campo";
                    return;
              }   

          var mes = vm.fechaN.getMonth()+1;  
          var requestJson = {
                    "id" : vm.Id,
                    "nombre" : vm.nombre,
                    "idResponsable": vm.IdResponsable ,
                    "especie" : vm.Especie,
                    "raza" : vm.Raza,
                    "genero" : vm.Genero,                 
                    "tamano" : vm.Tamano,
                    "estado" : vm.Estado,
                    "caracteristicas" : vm.Caracteristicas,
                    "fechaN" : vm.fechaN.getDate() + "/" + mes + "/" + vm.fechaN.getFullYear(),
                    "senales" : vm.Senales,
                    "color" : vm.Color,
                    "colorojos" : vm.Colorojos,
                    "personalidad" : vm.Personalidad,
                    "estadoSalud" : vm.EstadoSalud ,
                    /* "imagen" : vm.thumbnail.dataUrl*/                
                    }
             console.log(JSON.stringify(requestJson));       
             registarMascotaServices.registrarMascota(requestJson).then(function(data){
                debugger;
                if(data.resultado[0].codRespuesta == "200") {     
                       $mdDialog.show(
                       $mdDialog.alert()
                       .parent(angular.element(document.querySelector('#dialogContainer')))
                       .clickOutsideToClose(true)
                       .title('Registrar Mascota')
                       .textContent('!Se registró la mascota exitósamente¡, se registró con la identificación ' + data.resultado[0].id)
                       .ariaLabel('!Se registró la mascota exitósamente¡, se registró con la identificación')
                       .ok('Cerrar')                     
                      );
                      
                     vm.Id = "",
                     vm.nombre = "",
                     vm.IdResponsable  = "",
                     vm.Especie = "",
                     vm.Raza = "",
                     vm.Genero = "",                  
                     vm.Tamano = "",
                     vm.Estado = "",
                     vm.Caracteristicas = "",
                     vm.Vacunas = "",
                     vm.FechaN = "",
                     vm.Senales = "",
                     vm.Color = "",
                     vm.Colorojos = "",
                     vm.Personalidad = "",
                     vm.EstadoSalud   = "",
                     vm.thumbnail = {
                    dataUrl: ''
                    };               

                }else if(data.resultado[0].codRespuesta == "201"){
                       $mdDialog.show(
                       $mdDialog.alert()
                       .parent(angular.element(document.querySelector('#dialogContainer')))
                       .clickOutsideToClose(true)
                       .title('Registrar Mascota')
                       .textContent('Mascota no registrada')
                       .ariaLabel('Mascota no registrada')
                       .ok('Cerrar')                     
                      );
                }else if(data.resultado[0].codRespuesta == "202"){
                       $mdDialog.show(
                       $mdDialog.alert()
                       .parent(angular.element(document.querySelector('#dialogContainer')))
                       .clickOutsideToClose(true)
                       .title('Registrar Mascota')
                       .textContent('La mascota ya se encuentra registrada')
                       .ariaLabel('La mascota ya se enuentra registrada')
                       .ok('Cerrar')                     
                      );
                }           
             });
        } 


        function actualizar(){ 
            if(vm.fechaN > new Date()){
               vm.mensajeFecha = "La fecha debe ser menor o igual a la fecha actual";
               return;
             }

             if(vm.Id == undefined  || vm.Id  == ''){
                   vm.mensajeId = "Debes ingresar un dato válido para este campo";
                   return;
              }

             if(vm.nombre == undefined  || vm.nombre  == ''){
                   vm.mensajeNombre = "Debes ingresar un dato válido para este campo";
                    return;
              }


              if(vm.IdResponsable == undefined  || vm.IdResponsable  == ''){
                   vm.mensajeResponsable = "Debes ingresar un dato válido para este campo";
                    return;
              }


             if(vm.Especie == undefined  || vm.Especie == '0'){
                   vm.mensajeEspecie = "Debes seleccionar una opción";
                    return;
              }


             if(vm.Genero == undefined  || vm.Genero == '0'){
                   vm.mensajeGenero = "Debes seleccionar una opción";
                    return;
              } 

                 
              if(vm.Tamano == undefined  || vm.Tamano == '0'){
                   vm.mensajeTamano = "Debes seleccionar una opción";
                    return;
              }


              if(vm.Estado == undefined  || vm.Estado == '0'){
                   vm.mensajeEstado = "Debes seleccionar una opción";
                    return;
              }


              if(vm.Caracteristicas == undefined  || vm.Caracteristicas == ''){
                   vm.mensajeCaracteristicas = "Debes ingresar un dato válido para este campo";
                    return;
              }


              if(vm.Raza == undefined  || vm.Raza == ''){
                   vm.mensajeRaza = "Debes ingresar un dato válido para este campo";
                    return;
              }


           /*   if(vm.FechaN == undefined  || vm.FechaN == ''){
                   vm.mensajeFechaN = "Debes ingresar un dato válido para este campo";
                    return;
              }*/

              if(vm.Senales == undefined  || vm.Senales == ''){
                   vm.mensajeSenales = "Debes ingresar un dato válido para este campo";
                    return;
              }

              if(vm.Color == undefined  || vm.Color == ''){
                   vm.mensajeColor= "Debes ingresar un dato válido para este campo";
                    return;
              }


              if(vm.Colorojos == undefined  || vm.Colorojos == ''){
                   vm.mensajeColorojos = "Debes ingresar un dato válido para este campo";  
                    return;
              }


              if(vm.Personalidad == undefined  || vm.Personalidad == ''){
                   vm.mensajepersonalidad = "Debes ingresar un dato válido para este campo";
                    return;
              }


              if(vm.EstadoSalud == undefined  || vm.EstadoSalud == ''){
                   vm.mensajeEstadoSalud = "Debes ingresar un dato válido para este campo";
                    return;
              }    
          
  
           var mes = vm.fechaN.getMonth()+1; 
          var requestJson = {
                    "id" : vm.Id,
                    "nombre" : vm.nombre,
                    "idResponsable": vm.IdResponsable ,
                    "especie" : vm.Especie,
                    "raza" : vm.Raza,
                    "genero" : vm.Genero,                    
                    "tamano" : vm.Tamano,
                    "estado" : vm.Estado,
                    "caracteristicas" : vm.Caracteristicas,
                    "fechaN" : vm.fechaN.getDate() + "/" + mes + "/" + vm.fechaN.getFullYear(),
                    "senales" : vm.Senales,
                    "color" : vm.Color,
                    "colorojos" : vm.Colorojos,
                    "personalidad" : vm.Personalidad,
                    "estadoSalud" : vm.EstadoSalud,
                    "imagen" : vm.imagen                   
                    }         

          
               console.log(JSON.stringify(requestJson));       
             registarMascotaServices.actualizarMascota(requestJson).then(function(data){
                debugger;
                if(data.resultado[0].codRespuesta == "200") {     
                       $mdDialog.show(
                       $mdDialog.alert()
                       .parent(angular.element(document.querySelector('#dialogContainer')))
                       .clickOutsideToClose(true)
                       .title('Actualizar mascota')
                       .textContent('!Se actualizó la mascota exitósamente¡')
                       .ariaLabel('!Se actualizó la mascota exitósamente¡')
                       .ok('Cerrar')                     
                      );
                    vm.Id2 = "";
                    vm.Id = "";
                    vm.nombre = "";
                    vm.IdResponsable  = "";
                    vm.Especie = "";
                    vm.Raza = "";
                    vm.Genero = "";            
                    vm.Tamano = "";
                    vm.Estado = "";
                    vm.Caracteristicas = "";
                    vm.Vacunas = "";
                    vm.FechaN = "";
                    vm.Senales = "";
                    vm.Color = "";
                    vm.Colorojos = "";
                    vm.Personalidad = "";
                    vm.EstadoSalud   = ""; 
 
         
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
                       .title('Actualizar mascota')
                       .textContent('masocta no actualizado')
                       .ariaLabel('Mascota no actualizado')
                       .ok('Cerrar')                     
                      );
                }           
             });
        } 


        function consultar(){
            if(vm.Id2 == undefined  || vm.Id2  == ''){
                   vm.mensajeId2 = "Debes ingresar un id para consultar";
                   return;
             }
       

           var requestJson = {
                     "id" : vm.Id2,
                    "nombre" : vm.nombre,
                    "idResponsable": vm.IdResponsable ,
                    "especie" : vm.Especie,
                    "raza" : vm.Raza,
                    "genero" : vm.Genero,                  
                    "tamano" : vm.Tamano,
                    "estado" : vm.Estado,
                    "caracteristicas" : vm.Caracteristicas,
                    "fechaN" : vm.FechaN,
                    "senales" : vm.Senales,
                    "color" : vm.Color,
                    "colorojos" : vm.Colorojos,
                    "personalidad" : vm.Personalidad,
                    "estadoSalud" : vm.EstadoSalud ,
                    "imagen" : vm.imagen                                        
                    }
             registarMascotaServices.consultarMascotaServices(requestJson).then(function(data){
                debugger;
                if(data.resultado[0].codRespuesta == "200") { 
                     $mdDialog.show(
                       $mdDialog.alert()
                       .parent(angular.element(document.querySelector('#dialogContainer')))
                       .clickOutsideToClose(true)
                       .title('Consultar Mascota')
                       .textContent('Mascota consultada')
                       .ariaLabel('Mascota consultada')
                       .ok('Cerrar')                     
                      );
                    vm.Id = vm.Id2;
                    vm.nombre = data.resultado[0].nombre,
                    vm.IdResponsable  = data.resultado[0].idResponsable,
                    vm.Especie = data.resultado[0].especie,
                    vm.Raza = data.resultado[0].raza,
                    vm.Genero = data.resultado[0].genero,                
                    vm.Tamano = data.resultado[0].tamano,
                    vm.Estado = data.resultado[0].estado,
                    vm.Caracteristicas = data.resultado[0].caracteristicas,
                    vm.FechaN = new Date(data.resultado[0].fechaN),
                    vm.Senales = data.resultado[0].senales,
                    vm.Color = data.resultado[0].color,
                    vm.Colorojos = data.resultado[0].colorOjos,
                    vm.Personalidad = data.resultado[0].personalidad,
                    vm.EstadoSalud   = data.resultado[0].estadoSalud, 
                    vm.thumbnail.dataUrl =  data.resultado[0].imagen,

                    vm.Id2 = ""; 
                     vm.idDisabled = true;
                     vm.actualizarDisabled = false;
                     vm.eliminarDisabled = false;
                      vm.DisabledCancelar = false;

                     vm.registrarDisabled = true;
                     vm.consultarDisabled = true; 

                }else {
                      $mdDialog.show(
                       $mdDialog.alert()
                       .parent(angular.element(document.querySelector('#dialogContainer')))
                       .clickOutsideToClose(true)
                       .title('Consultar Mascota')
                       .textContent('Masocta no consultada')
                       .ariaLabel('Verifique el id de la mascota')
                       .ok('Cerrar')                     
                      );

                }            
             });
        } 



        function eliminar(){
         

        
           var requestJson = {
                     "id" : vm.Id,
                    "nombre" : vm.nombre,
                    "idResponsable": vm.IdResponsable ,
                    "especie" : vm.Especie,
                    "raza" : vm.Raza,
                    "genero" : vm.Genero,                
                    "tamano" : vm.Tamano,
                    "estado" : vm.Estado,
                    "caracteristicas" : vm.Caracteristicas,
                    "fechaN" : vm.FechaN,
                    "senales" : vm.Senales,
                    "color" : vm.Color,
                    "colorojos" : vm.Colorojos,
                    "personalidad" : vm.Personalidad,
                    "estadoSalud" : vm.EstadoSalud,
                    "imagen" : vm.imagen                                         
                    }
             registarMascotaServices.eliminarMascota(requestJson).then(function(data){
                debugger;
                if(data.resultado[0].codRespuesta == "200") { 
                     $mdDialog.show(
                       $mdDialog.alert()
                       .parent(angular.element(document.querySelector('#dialogContainer')))
                       .clickOutsideToClose(true)
                       .title('Eliminar mascota')
                       .textContent('!Mascota eliminada exitósamente¡')
                       .ariaLabel('!Mascota eliminada exitósamente¡')
                       .ok('Cerrar')                     
                      );
                    
                    vm.Id = "";
                    vm.nombre = "",
                    vm.IdResponsable  = "",
                    vm.Especie = "",
                    vm.Raza = "",
                    vm.Genero = "",              
                    vm.Tamano = "",
                    vm.Estado = "",
                    vm.Caracteristicas = "",
                    vm.FechaN = "",
                    vm.Senales = "",
                    vm.Color = "",
                    vm.Colorojos = "",
                    vm.Personalidad = "",
                    vm.EstadoSalud   = "",   
                     vm.idDisabled = false;
                     vm.actualizarDisabled = false;
                     vm.eliminarDisabled = false;

                     vm.registrarDisabled = true;
                     vm.consultarDisabled = true; 

                }else {
                      $mdDialog.show(
                        $mdDialog.alert()
                       .parent(angular.element(document.querySelector('#dialogContainer')))
                       .clickOutsideToClose(true)
                       .title('Eliminar Mascota')
                       .textContent('Mascota no eliminada')
                       .ariaLabel('Mascota no eliminada')
                       .ok('Cerrar')                     
                      );

                }            
             });
        }    

}        
    
})();