(function() {
    'use strict';

    angular
    .module('starter',[])
    .controller('registrarUsuarioController', registrarUsuarioController);
    registrarUsuarioController.$inject = ['registarUsuarioServices'];

    function registrarUsuarioController(service) {
        var vm = this;

        vm.registrarUsuario = registrarUsuario;
     

      function registrarUsuario() { 
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
                    "contrasena" :vm.contrasena,
                    "confirmarContrasena" : vm.confirmarContrasena
                    }        

               console.log(JSON.stringify(requestJson));
              service.registrarUsuario(requestJson).then(function(data){
            if(data.resultado.codigoRespuesta == "200") {                
                vm.logos =  data.resultado.conveniosRecaudo;
                vm.loader=false;
            }else{
                vm.loader=false;
                vm.principal = false;
                vm.principalsub = false;
                vm.successPoliza = true;
                vm.messageSubtitle = "¡Lamentablemente no hemos podido procesar tu solicitud!";
                vm.description = "Por favor intenta más tarde.";
                vm.userName =  vm.nombreUsuario; 
                vm.urlPrincipalBtn = "/wps/portal/girosyfinanzas/transacciones";
                vm.textPrincipalBtn = "Aceptar";
                vm.messageImagen = "img/app/mensaje_de_error_icono.png";
            }  
       });
   }
}        
    
})();