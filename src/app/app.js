(function () {
    'use strict';

    var dependencies = [
        'ngRoute',
        'angularStart.core',
        'angularStart.components',
        'angularStart.controllers',
        'angularStart.services'
    ];

    angular
        .module('angularStart', dependencies);
}());