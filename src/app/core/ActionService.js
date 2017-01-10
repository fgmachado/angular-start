angular
    .module(module.core)
    .service('ActionService', ActionService);

ActionService.$inject = ['$http'];

function ActionService($http) {
    return {
        getInstance: getInstance
    };

    function getInstance(method, url, success, error, data) {
        var promise = null;

        var requestConfig = {
            url: url,
            method: method
        };

        if (typeof data !== 'undefined')
            requestConfig.data = data;

        if (!promise)
            promise = $http(requestConfig).then(success).catch(error);

        return promise;
    };
};