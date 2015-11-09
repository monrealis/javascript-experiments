var app = angular.module('myApp', []);
app.controller('Controller1', Controller1);
app.controller('Controller2', Controller2);
app.factory('Data', createData);
app.filter('capitalize', returnCapitalize);
app.directive('hw', getHelloWorldDirective);

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

function getHelloWorldDirective() {
    return function(scope, element, attrs) {
        element.bind('mouseenter', function(e) {
            e.target.style.color = attrs.hw;
        });
        element.bind('mouseleave', function(e) {
            e.target.style.color = '';
        });
    }
}

app.directive('mydiv', function () {
    return {
        restrict: 'E',
        scope: {},
        controller: function ($scope) {
            $scope.features = ['first'];

            this.addSecond = function () {
                $scope.features.push('second');
            }
        },
        link: function (scope, element) {
            element.addClass('nothing')
            element.bind('click', function () {
                alert('Here i am: ' + scope.features);
            })
        }
    };
})

app.directive('myatt', function () {
    return {
        require: 'mydiv',
        link: function (scope, element, attrs, myDivController) {
            myDivController.addSecond();
        }
    };
})