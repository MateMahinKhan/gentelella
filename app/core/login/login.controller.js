(function () {
    'use strict';

    angular.module('app.login', [])
        .controller('LoginController', LoginController);


    function LoginController($scope,$state) {
        var vm = $scope;
        vm.username = 'ali@bcg.com'
        vm.password = 'alialiali'
        vm.authenticate = function () {
            feathersAuth.authenticate({
                strategy: 'local',
                email: vm.username,
                password: vm.password
            }).then(function(result){
                console.log('Authenticated!', result);
                return feathersAuth.passport.verifyJWT(result.accessToken);

            }).then(function(payload) {
                console.log('JWT Payload', payload);
                return feathersAuth.service('users').get(payload.userId);
            }).then(function(user) {
                feathersAuth.set('user', user);
                console.log('User', feathersAuth.get('user'));
                $state.go("home")
            }).catch(function(error){

            });
        };
    };
})();
