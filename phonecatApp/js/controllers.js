'use strict';

/* Controllers */

var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('PhoneListCtrl', ['$scope', '$http',
    function($scope, $http) {
        $http.get('phones/phones.json').success(function(data, status) {
            // console.log(data);
            $scope.phones = data.slice(0, 5);
        })
        $scope.orderProp = 'age';
    }
]);
phonecatControllers.controller('MainNav', ['$scope',
    function($scope) {
        $scope.slogan = "Hi This is Phonecat"
    }
]);
phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', '$http',
    function($scope, $routeParams, $http) {
        $http.get('phones/' + $routeParams.phoneId + '.json').success(function(data) {
            $scope.phone = data;
        });
    }
]);
