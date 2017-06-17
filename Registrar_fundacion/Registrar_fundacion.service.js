(function(){
	'use strict';
	angular
		.module('starter')
		.service('registarFundacionServices',registarFundacionServices);


	registarFundacionServices.$inject = ['$http','$q'];

	function registarFundacionServices($http,$q){
         var self = this;
        var ipserver = 'http://localhost:8090'; 
        self.registrarFundacion = registrarFundacion;

        function registrarFundacion(auditJson){                
            var promesa = $q.defer();
            $http.post(ipserver+"/mimas/rest/services/registrarFundacion",auditJson)
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