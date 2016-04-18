Prayer.factory('LoginService', function($http,$q, $log, $rootScope,$ionicLoading,$ionicPopup,$timeout) {
    return {

        showProgress: function () {
        $ionicLoading.show({
            content: '<i class="icon ion-loading-a" style="font-size:30px"></i>'
        });
        },
        hideProgress: function () {
            $ionicLoading.hide();
         },
        loginUser: function(name, pass) {
            var deferred = $q.defer();
            var promise = deferred.promise;

            if (name == 'prayer' && pass == 'prayer') {
                deferred.resolve('Valid credentials.');
            } else {
                deferred.reject('Invalid credentials.');
            }
            promise.success = function(fn) {
                promise.then(fn);
                return promise;
            }
            promise.error = function(fn) {
                promise.then(null, fn);
                return promise;
            }
            return promise;
        }
        
    }
});



