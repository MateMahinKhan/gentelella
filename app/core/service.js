(function () {
    'use strict';

    angular.module('app.service', [])
        .service('AuthService', AuthService);


    function AuthService() {
        this.progressLogin = function(data) {
            return feathersAuth.authenticate(data).then(function(result){
                localStorage.setItem("jwt",result.accessToken)
                return feathersAuth.passport.verifyJWT(result.accessToken);

            }).then(function(payload) {
                console.log('JWT Payload', payload);
                return feathersAuth.service('users').get(payload.userId);
            }).then(function(user) {
                feathersAuth.set('user', user);
               return true;

            }).catch(function(error){
                return false;
            });

        }
    };
})();
