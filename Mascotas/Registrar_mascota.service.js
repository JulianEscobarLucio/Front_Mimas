(function(){
	'use strict';
	angular
		.module('starter')
		.service('registarMascotaServices',registarMascotaServices);


	registarMascotaServices.$inject = ['$http','$q'];

	function registarMascotaServices($http,$q){
         var self = this;
        var ipserver = 'http://localhost:8091'; 
        self.registrarMascota = registrarMascota;

        function registrarMascota(auditJson){                
            var promesa = $q.defer();
            $http.post(ipserver+"/mimas/rest/services/registrarMascota",auditJson)
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