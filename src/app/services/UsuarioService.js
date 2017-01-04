(function () {
    'use strict';

    angular
        .module('angularStart.services')
        .service('UsuarioService', UsuarioService);

    UsuarioService.$inject = ['BaseService', 'AppConfig'];

    function UsuarioService($baseService, $appConfig) {
        return {
            consultar: consultar
        };

        function consultar(sucesso, erro) {
            return $baseService.post($appConfig.api + 'usuario', sucesso, erro);
        };
    }
}());