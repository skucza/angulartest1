/**
 * Created by pskuczynski on 2015-01-23.
 */
(function () {
    'use strict';
    angular
        .module('myApp', [
            'ui.router',
            'login'
        ])
        .config([
            '$locationProvider',
            '$urlRouterProvider',
            function ($locationProvider, $urlRouterProvider) {
                $locationProvider.html5Mode({
                    enabled: true,
                    requireBase: false
                });
                $urlRouterProvider.otherwise('/login');
            }
        ]);
})();