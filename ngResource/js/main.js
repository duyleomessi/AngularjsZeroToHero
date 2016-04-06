// This is the sample data for this lesson

'use strict';

var app = angular.module('codecraft', ['ngResource', 'infinite-scroll']);

app.controller('PersonDetailController', ['$scope', 'ContactService', function ($scope, ContactService) {
    $scope.contacts = ContactService;
}]);

app.controller('PersonListController', ['$scope', 'ContactService', function ($scope, ContactService) {

    $scope.order = '';
    $scope.contacts = ContactService;

    $scope.search = "";

    $scope.sensitiveSearch = function (person) {
        if ($scope.search)
            return person.name.indexOf($scope.search) == 0 || person.email.indexOf($scope.search) == 0;
        return true;
    }
}]);

app.config(function ($httpProvider, $resourceProvider) {
    $httpProvider.defaults.headers.common['Authorization'] = 'Token f57ff02377a702ae022e688d432c6fe8a516f283';
    $resourceProvider.defaults.stripTrailingSlashes = false;
});

app.factory('Contact', ['$resource', function ($resource) {
    return $resource('https://codecraftpro.com/api/samples/v1/contact/:id');
}]);

app.service('ContactService', ['Contact', function (Contact) {
    Contact.get(function(data) {
        console.log(data);
    });

    var self = {
        page: 1,
        hasMore: true,
        isLoading: false,
        selectedPerson: null,
        persons: [],
        loadContacts: function () {
            Contact.get(function (data) {
                angular.forEach(data.results, function (person) {
                    self.persons.push(new Contact(person));
                })
            });
        }

    };

    self.loadContacts();
    return self;
}]);

