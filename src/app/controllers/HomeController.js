(function () {
    'use strict';

    angular
        .module('angularStart.controllers')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$scope'];

    function HomeController($scope) {
        var vm = this;

        activate();

        function activate() { };
    };
}());