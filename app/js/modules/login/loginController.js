/**
 * Created by pskuczynski on 2015-01-23.
 */
(function () {
    'use strict';

    var LoginController = function () {
        console.log(arguments);
    };

    angular
        .module('login', [])
        .config(['$stateProvider', function ($stateProvider) {
            $stateProvider
                .state('login', {
                    url: '/login',
                    templateUrl: 'js/modules/login/login.html',
                    controllerAs: 'login',
                    controller: 'LoginController'
                });
        }])
        .controller('LoginController', [
            '$state',
            LoginController
        ])
})();