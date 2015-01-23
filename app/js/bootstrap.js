/**
 * Created by pskuczynski on 2015-01-23.
 */
(function () {
    'use strict';
    window.onload = function () {
        var $rootElement = angular.element(window.document.getElementsByTagName('html'));
        var modules = [
            'ng',
            'myApp',
            function ($provide) {
                $provide.value('$rootElement', $rootElement);
            }
        ];
        var $injector = angular.injector(modules);

        var $compile = $injector.get('$compile');
        var compositeLinkFn = $compile($rootElement);

        var $rootScope = $injector.get('$rootScope');
        compositeLinkFn($rootScope);

        $rootScope.$apply();
    }
})();

