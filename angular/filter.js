var app = angular.module('myApp', []);
app.controller('Controller1', Controller1);
app.factory('Names', createNames);

function Controller1($scope, Names) {
    $scope.names = Names;
}

function createNames() {
    return [{first: 'First', last: 'Last'}, {first: 'Second', last: 'Last2'}];
}

app.run(function ($rootScope, $log) {
    $rootScope.$log = $log;
})
