angular.
    module('mainPage').
    component('mainPage', {
        templateUrl : 'app/main-page/main-page.template.html',
        controller : ['$location', '$scope',
         function MainPageController($location, $scope ) {

            $scope.data = 'nananna';
            //   START CONTROLLER

// END CONTROLLER
}]
// END MODULE
});