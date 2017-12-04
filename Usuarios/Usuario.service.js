(function(){
	'use strict';
	angular
		.module('starter')
		.service('UsuarioServices',UsuarioServices);


	UsuarioServices.$inject = ['$http','$q'];

	function UsuarioServices($http,$q){
         var self = this;
        var ipserver = 'http://localhost:8092'; 
        self.registrarUsuario = registrarUsuario;
        self.consultarUsuario = consultarUsuario;
        self.actualizarUsuario = actualizarUsuario;
        self.eliminarUsuario = eliminarUsuario;

        function registrarUsuario(auditJson){                
            var promesa = $q.defer();
            $http.post(ipserver+"/mimas/rest/usuarioServices/registrarUsuario",auditJson)
                .success(function(data){
                    promesa.resolve({
                        resultado:data
                    })
                })
                .error(function(err){
                    promesa.resolve({
                        resultado:err
                    })
                })
                return promesa.promise      
            
        }


          function consultarUsuario(auditJson){                
            var promesa = $q.defer();
            $http.post(ipserver+"/mimas/rest/usuarioServices/consultarUsuario",auditJson)
                .success(function(data){
                    promesa.resolve({
                        resultado:data
                    })
                })
                .error(function(err){
                    promesa.resolve({
                        resultado:err
                    })
                })
                return promesa.promise     
            
        }


        function actualizarUsuario(auditJson){                
            var promesa = $q.defer();
            $http.post(ipserver+"/mimas/rest/usuarioServices/actualizarUsuario",auditJson)
                .success(function(data){
                    promesa.resolve({
                        resultado:data
                    })
                })
                .error(function(err){
                    promesa.resolve({
                        resultado:err
                    })
                })
                return promesa.promise     
            
        }


        function eliminarUsuario(auditJson){                
            var promesa = $q.defer();
            $http.post(ipserver+"/mimas/rest/usuarioServices/eliminarUsuario",auditJson)
                .success(function(data){
                    promesa.resolve({
                        resultado:data
                    })
                })
                .error(function(err){
                    promesa.resolve({
                        resultado:err
                    })
                })
                return promesa.promise     
            
        }



    }

})();