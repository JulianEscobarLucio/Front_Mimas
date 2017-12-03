(function(){
	'use strict';
	angular
		.module('starter')
		.service('rolServices',rolServices);


	rolServices.$inject = ['$http','$q'];

	function rolServices($http,$q){
         var self = this;
        var ipserver = 'http://localhost:8091'; 
        self.registrarRol = registrarRol;
        self.consultarRol = consultarRol;
        self.actualizarRol = actualizarRol;
        self.eliminarRol = eliminarRol;


        function registrarRol(auditJson){                
            var promesa = $q.defer();
            $http.post(ipserver+"/mimas/rest/rolServices/registrarRol",auditJson)
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


         function consultarRol(auditJson){                
            var promesa = $q.defer();
            $http.post(ipserver+"/mimas/rest/rolServices/consultarRol",auditJson)
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



         function actualizarRol(auditJson){                
            var promesa = $q.defer();
            $http.post(ipserver+"/mimas/rest/rolServices/actualizarRol",auditJson)
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



         function eliminarRol(auditJson){                
            var promesa = $q.defer();
            $http.post(ipserver+"/mimas/rest/rolServices/eliminarRol",auditJson)
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