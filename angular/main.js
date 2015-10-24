var app = angular.module('MyApp', [])
app.controller('Controller1', Controller1)
app.controller('Controller2', Controller2)

function Controller1($scope) {
    $scope.data = {message: "Hello World"};
}

function Controller2($scope) {
    $scope.data = {message: "Hello World"};
}