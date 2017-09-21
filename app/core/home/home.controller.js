(function () {
    'use strict';

    angular.module('app.home', [])

            .controller('HomeController', HomeController);


    function HomeController($scope,$state) {
        var vm = $scope;
        vm.user = feathersAuth.get('user')
        if(vm.user == undefined) {
            $state.go("login")
        }
        vm.logout = function() {
            feathersAuth.logout();
        }
    }
})();
