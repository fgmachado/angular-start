(function () {
    'use strict';

    angular
        .module('angularStart.core')
        .service('BaseService', baseService);

    baseService.$inject = ['$http'];

    function baseService($http) {
        return {
            get: get,
            post: post
        };

        function get(url, success, error, data) {
            return new Action('POST', url, success, error, data);
        };

        function post(url, success, error, data) {
            return new Action('POST', url, success, error, data);
        };
    }
}());