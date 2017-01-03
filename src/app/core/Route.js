function Route(controller, view, alias) {
    var route = {
        controller: controller,
        templateUrl: view
    };

    if (typeof alias === 'string')
        route.controllerAs = alias;

    return route;
}; 