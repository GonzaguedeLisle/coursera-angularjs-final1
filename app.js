(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController ($scope) {
    $scope.checkQtity = function () {
        alert("checkQtity");
        console.log('checkQtity');
    };
}
});