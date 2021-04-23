(function () {
    'use strict';

    //Module declaration
    var module = angular.module('LunchCheck', []) ;

    //Controller declaration
    module.controller('LunchCheckController', LunchCheckController);

    //Service injection to protect against minification
    LunchCheckController.$inject = ['$scope'];

    //Function evaluating the items
    function LunchCheckController ($scope) {

        //Checks if data has been entered, and displays message if not 
        //If there is data, calls the function to calculate the amount
        $scope.checkQtity = function () {
            if ($scope.list) {
                $scope.noData = "";
                $scope.quantity = assessQtity ($scope.list);
            } else {
                $scope.quantity = "";
                $scope.noData = "Please enter data first";
            }
        }

        //Splits the string and returns the appropriate message
        function assessQtity (string) {
            var itemsArrayLength = (string.split(',')).length;
            if (itemsArrayLength <= 3) {
                return "Enjoy!";
            } else {
                return "Too much!";
            }
        }
    }
})();