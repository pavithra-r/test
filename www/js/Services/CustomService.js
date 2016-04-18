
/**
* Created by Asharani on 27-6-2014
*/

 Prayer.factory('CustomService', function($http,$q, $log, $rootScope, $ionicPopup) {
    // Might use a resource here that returns a JSON array


    return {
        getall: function () {
            //var data = '{"request":{"Name":"","GenericSearchViewModel":{"Name":""}}}';
            var deferred = $q.defer(); //promise
            $http({
                method: 'GET',
                // url: 'http://vzone.azurewebsites.net/Holidays',
                url: 'http://tst-vzone.azurewebsites.net/Holidays',
               // data: data,
                headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }
            }).success(function (data, status, headers, config) {debugger;
                deferred.resolve(data);
            }).error(function (data, status, header, config) {debugger;
                deferred.reject(status);
            });
            return deferred.promise;
        },
          }
});