// This is the sample data for this lesson

'use strict';

var app = angular.module('codecraft', []);

app.controller('RootController', ['$scope', function ($scope) {

}]);

app.controller('ParentController', ['$scope', '$rootScope', function ($scope, $rootScope) {
   /* $scope.name = "Parent";*/

}]);

app.controller('ChildController', ['$scope', '$rootScope', function ($scope, $rootScope) {
    $scope.reset = function () {
        $rootScope.name = 'Reset by  child';
    }
}]);