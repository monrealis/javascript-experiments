var app = angular.module('MyApp', []);
app.controller('Controller1', Controller1);
app.controller('Controller2', Controller2);
app.factory('Data', createData);
app.filter('capitalize', returnCapitalize);

function Controller1($scope, Data) {
    $scope.data = Data;
}

function Controller2($scope, Data) {
    $scope.data = Data;
}

function createData() {
    return {message: 'Hello world'};
}

function returnCapitalize() {
    return capitalize;
}
function capitalize(text) {
    return text.toUpperCase();
}