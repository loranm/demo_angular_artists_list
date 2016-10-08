(function() {
    "use strict";
    angular.module('musicApp').config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/list', {
                templateUrl: './partials/list.html',
                controller: 'listController'
            })
            .when('/add', {
                templateUrl: './partials/detail.html',
                controller: 'addController'
            })
            .when('/edit/:id', {
                templateUrl: './partials/detail.html',
                controller: 'editController'
            })
            .otherwise({
                redirectTo: '/'
            });
    }])
})();
