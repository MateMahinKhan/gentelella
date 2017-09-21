(function () {
    'use strict';

    angular.module('app.index', ['app.service'])

        .controller('IndexController', HomeController);


    function HomeController($scope,$state,AuthService) {
        var vm = $scope;
        AuthService.progressLogin({
            strategy: 'jwt',
            accessToken: localStorage.getItem("jwt")
        }).then(function(res) {
            if(!res){
                $state.go("login")
            }
        });

    }
})();
