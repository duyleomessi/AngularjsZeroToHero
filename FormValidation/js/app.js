/**
 * Created by root on 02/03/2016.
 */

'use strict';

var app = angular.module('MinMax', []);

app.constant('baseUrl', "http://localhost:3000/");

app.controller('MinMaxCtrl', ['$scope', '$http', 'baseUrl', function ($scope, $http, baseUrl) {
    $scope.formModel = {};
    $scope.onSubmit = function (valid) {
        if (valid) {
            console.log($scope.formModel);
            $http.post(baseUrl + 'users', $scope.formModel)
                .success(function (data) {
                    //$scope.formModel = data;
                    console.log('success');
                })
                .error(function (data, status) {
                    console.log('Fail vl');
                    console.log(status);

                })
        } else {
            console.log("invalid form");
        }
    }
}]);

