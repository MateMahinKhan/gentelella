(function () {
    'use strict';

    angular.module('app')

            .config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider'];

    function config($stateProvider, $urlRouterProvider) {

        var loginState = {
            name: 'login',
            url: '/login',
            templateUrl: 'core/login/login.view.html',
            controller: 'LoginController'
        };

        var homeState = {
            name: 'home',
            url: '/home',
            templateUrl: 'core/home/home.view.html',
            controller: 'HomeController'
        };

        $stateProvider.state(loginState);
        $stateProvider.state(homeState);
        $urlRouterProvider.otherwise('/');
    }
})();
