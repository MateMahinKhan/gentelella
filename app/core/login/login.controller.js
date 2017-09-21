(function () {
    'use strict';

    angular.module('app.login', ['app.service'])
        .controller('LoginController', LoginController);


    function LoginController($scope,$state,AuthService) {
        var vm = $scope;
        AuthService.progressLogin({
            strategy: 'jwt',
            accessToken: localStorage.getItem("jwt")
        }).then(function(res) {
            if(res) {
                $state.go("home")
            }
        });
        vm.authenticate = function () {
            AuthService.progressLogin({
                strategy: 'local',
                email: vm.username,
                password: vm.password
            }).then(function(res) {
                if(res) {
                    $state.go("home")
                } else {
                    alert("Login failed!")
                }
            })
        };
    };
})();
