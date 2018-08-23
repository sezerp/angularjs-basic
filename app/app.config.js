// 'use strict';
var appModule = angular.
    module('knowledgeSession').
    config(['$locationProvider', '$routeProvider',
        function config($locationProvider, $routeProvider) {
            $locationProvider.hashPrefix('!');

            $routeProvider.
                when('/', {
                    templateUrl : 'app/main-page/main-page.template.html'
                }).
                otherwise('/');
        }
    ]);