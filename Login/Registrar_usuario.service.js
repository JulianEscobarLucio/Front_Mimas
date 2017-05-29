(function(){
	'use strict';
	angular
		.module('starter')
		.service('registarUsuarioServices',misProductosService);


	misProductosService.$inject = ['$http','$q'];

	function misProductosService($http,$q){
         var self = this;
        var ipserver = 'http://localhost:8091'; 
        self.registrarUsuario = registrarUsuario;

        function registrarUsuario(auditJson){                
            var promesa = $q.defer();
            $http.post(ipserver+"/mimas/rest/services/registrarUsuario"
                        ,auditJson)
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