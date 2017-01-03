(function () {
    'use strict';

    var app = {
        'api': 'http://localhost/api/',
        'views': 'views/'
    };

    angular
        .module('angularStart')
        .constant('AppConfig', app);
}());