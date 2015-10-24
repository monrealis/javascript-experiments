var app = angular.module('MyApp', []);
app.controller('Controller1', Controller1);
app.controller('Controller2', Controller2);
app.factory('Data', function () {
    return {message: 'Hello world'}
});

function Controller1($scope, Data) {
    $scope.data = Data;
}

function Controller2($scope, Data) {
    $scope.data = Data;
}