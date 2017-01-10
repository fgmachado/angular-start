var dependencies = [
    'ngRoute',
    module.core,
    module.components,
    module.controllers,
    module.services
];

angular
    .module(module.main, dependencies);