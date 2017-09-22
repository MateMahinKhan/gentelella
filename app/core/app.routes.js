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

        var indexState = {
            name: 'index',
            url: '/',
            templateUrl: 'core/index/index.view.html',
            controller: 'IndexController'
        };

        var tableState = {
            name: 'table',
            url: '/table',
            templateUrl: 'core/table/table.view.html',
            controller: 'TableController'
        };


        $stateProvider.state(loginState);
        $stateProvider.state(homeState);
        $stateProvider.state(indexState);
        $stateProvider.state(tableState);
        $urlRouterProvider.otherwise('/');
    }
})();
