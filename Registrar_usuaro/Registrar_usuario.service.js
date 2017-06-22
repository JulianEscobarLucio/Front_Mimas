(function(){
	'use strict';
	angular
		.module('starter')
		.service('registarUsuarioServices',registarUsuarioServices);


	registarUsuarioServices.$inject = ['$http','$q'];

	function registarUsuarioServices($http,$q){
         var self = this;
        var ipserver = 'http://localhost:8091'; 
        self.registrarUsuario = registrarUsuario;

        function registrarUsuario(auditJson){                
            var promesa = $q.defer();
            $http.post(ipserver+"/mimas/rest/fundacionServices/registrarFundacion",auditJson)
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