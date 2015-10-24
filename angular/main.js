var app = angular.module('myApp', [])

app.factory('Msg', function () {
    return {message: 'Hi from factory'};
})

function Controller1($scope, Msg) {
    scope.msg = Msg;
}

function Controller2($scope, Msg) {
    scope.msg = Msg;
}