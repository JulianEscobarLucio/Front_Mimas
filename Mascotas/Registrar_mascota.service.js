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
        self.consultarMascotaServices = consultarMascotaServices;
        self.actualizarMascota = actualizarMascota;
        self.eliminarMascota = eliminarMascota;

        function registrarMascota(auditJson){                
            var promesa = $q.defer();
            $http.post(ipserver+"/mimas/rest/Mascotaservices/registrarMacota",auditJson)
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

function consultarMascotaServices(auditJson){                
            var promesa = $q.defer();
            $http.post(ipserver+"/mimas/rest/Mascotaservices/consultarMascota",auditJson)
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

        function actualizarMascota(auditJson){                
            var promesa = $q.defer();
            $http.post(ipserver+"/mimas/rest/Mascotaservices/actualizarMascota",auditJson)
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

    
         function eliminarMascota(auditJson){                
            var promesa = $q.defer();
            $http.post(ipserver+"/mimas/rest/Mascotaservices/eliminarMascota",auditJson)
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