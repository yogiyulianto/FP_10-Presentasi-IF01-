var app = angular.module('app', []);
app.controller('ctrl', function ($scope, $log, $window) {
    $scope.redirect1 = function () {
        var url = "blog.html";
        $window.location.href = url;
    };
    $scope.redirect2 = function () {
        var url = "index.html";
        $window.location.href = url;
    };
    $scope.redirect3 = function () {
        var url = "index.html";
        $window.location.href = url;
    };
});
