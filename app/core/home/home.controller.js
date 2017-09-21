(function () {
    'use strict';

    angular.module('app.home', ['app.service'])

            .controller('HomeController', HomeController);


    function HomeController($scope,$state,AuthService) {
        var vm = $scope;
        AuthService.progressLogin({
            strategy: 'jwt',
            accessToken: localStorage.getItem("jwt")
        }).then(function(res) {
            if(res) {
                console.log("res")
                vm.user = feathersAuth.get('user')
                $scope.$apply()
                console.log("res",vm.user)
            } else {
                $state.go("login")
            }
        });


        vm.logout = function() {
            localStorage.removeItem("jwt")
            feathersAuth.logout();
            $state.go("login")
        }
    }
})();
