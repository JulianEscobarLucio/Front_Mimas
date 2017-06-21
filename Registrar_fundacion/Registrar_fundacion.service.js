(function(){
	'use strict';
	angular
		.module('starter')
		.service('registarFundacionServices',registarFundacionServices);


	registarFundacionServices.$inject = ['$http','$q'];

	function registarFundacionServices($http,$q){
         var self = this;
        var ipserver = 'http://localhost:8091'; 
        self.registrarFundacion = registrarFundacion;
        self.consultarFundacion = consultarFundacion;
        self.actualizarFundacion = actualizarFundacion;
        self.eliminarFundacion = eliminarFundacion;


        function registrarFundacion(auditJson){  
        	
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


         function consultarFundacion(auditJson){    
        	 
            var promesa = $q.defer();
            $http.post(ipserver+"/mimas/rest/fundacionServices/consultarFundacion",auditJson)
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



         function actualizarFundacion(auditJson){                
            var promesa = $q.defer();
            $http.post(ipserver+"/mimas/rest/fundacionServices/actualizarFundacion",auditJson)
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



         function eliminarFundacion(auditJson){   
        	 
            var promesa = $q.defer();
            $http.post(ipserver+"/mimas/rest/fundacionServices/eliminarFundacion",auditJson)
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