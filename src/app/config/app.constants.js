var app = {
    'rootUrl': "http://localhost:8080/angularstart/",
    'api': 'http://localhost:8080/api/',
    'views': 'views/'
};

angular
    .module(module.main)
    .constant('AppConfig', app);