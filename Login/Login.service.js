(function(){
	'use strict';
	angular
		.module('starter')
		.service('loginServices',loginServices);


	loginServices.$inject = ['$http','$q'];

	function loginServices($http,$q){
        var self = this;
        var ipserver = 'http://localhost:8091'; 
        self.login = login;

        function login(auditJson){                
            var promesa = $q.defer();
            debugger;
            $http.post(ipserver+"/mimas/rest/securityServices/login"
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