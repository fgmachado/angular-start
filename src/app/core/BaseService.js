angular
    .module(module.core)
    .service('BaseService', baseService);

baseService.$inject = ['$http', 'ActionService'];

function baseService($http, $actionService) {
    return {
        get: get,
        post: post
    };

    function get(url, success, error, data) {
        return $actionService.getInstance('GET', url, success, error, data);
    };

    function post(url, success, error, data) {
        return $actionService.getInstance('POST', url, success, error, data);
    };
};