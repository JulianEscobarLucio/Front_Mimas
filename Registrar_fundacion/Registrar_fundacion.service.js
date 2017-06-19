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
      
        function registrarFundacion(auditJson){  
          debugger;              
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