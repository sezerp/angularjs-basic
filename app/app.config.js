// 'use strict';
var appModule = angular.
    module('knowledgeSession').
    config(['$locationProvider', '$routeProvider',
        function config($locationProvider, $routeProvider) {
            $locationProvider.hashPrefix('!');

            $routeProvider.
                when('/', {
                    template: '<main-page></main-page>'
                }).
                otherwise('/');
        }
    ]);