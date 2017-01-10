angular
    .module(module.controllers)
    .controller('HomeController', HomeController);

HomeController.$inject = ['$scope', 'UsuarioService'];

function HomeController($scope, $usuarioService) {
    var vm = this;

    activate();

    function activate() {
        var sucesso = function (response) {
            console.log(response);
        };

        var erro = function (error) {
            console.log(error);
        };

        $usuarioService.consultar(sucesso, erro);
    };
};