(function () {
    'use strict';

    angular
        .module('angularStart')
        .config(config);

    config.$inject = ['$routeProvider', '$locationProvider', 'AppConfig'];

    function config($routeProvider, $locationProvider, App) {
        $locationProvider.html5Mode(false);

        $routeProvider
            .when('/', new Route('HomeController', App.views + 'home/index.html', 'vm'))
            .otherwise({ redirect: '/' });
    };  
}());