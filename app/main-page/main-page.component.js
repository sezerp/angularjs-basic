angular.
    module('mainPage').
    component('mainPage', {
        templateUrl : 'app/main-page/main-page.template.html',
        controller : ['$location', '$scope',
         function MainPageController($location, $scope ) {

            $scope.data = 'nananna';
            $scope.obj = {
                a: 'a',
                b: 'b'
            };
            
            $scope.obj.c = [1,2,3];
            //   START CONTROLLER

// END CONTROLLER
}]
// END MODULE
});