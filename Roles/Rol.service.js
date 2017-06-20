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


    }

})();