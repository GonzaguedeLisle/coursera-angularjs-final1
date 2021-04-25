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
        var dataArray = null;

        //Checks if data has been entered or not in the view, transforms the data into 
        // an array and calls for the right function
        $scope.checkQtity = function () {
            if ($scope.list) {
                dataArray = stringToArray ($scope.list, ',');
                //Checks if there is more than empty items
                if (dataArray.length > 0){
                dataPresence(dataArray);
                } else {
                    dataAbsence();
                }
            } else {
                dataAbsence();
            }
        }

        /*If data has been entered by the user, the function cleans previous data,
          calls for the function calculating if the number of items fit the rules,
          and changes the textbox border */
        function dataPresence (array) {
            $scope.noData = "";
            $scope.quantity = calculateQtity(array);
            document.getElementById('lunch-menu').style.borderColor = 'green' ;
        };

        /*If no data has been entered by the user, the function cleans previous data,
          sens the view a message asking the user to fill in some data,
          and changes the textbox border */
        function dataAbsence () {
            $scope.quantity = "";
            $scope.noData = "Please enter data first";
            document.getElementById('lunch-menu').style.borderColor = 'red' ;
        };

        //Splits the string and returns the appropriate message
        function calculateQtity (array) {
            var itemsArrayLength = array.length;
            if (itemsArrayLength <= 3) {
                return "Enjoy!";
            } else {
                return "Too much!";
            }
        };

        //Transforms a string into an Array and cleans it from empty items
        function stringToArray (string, separator) {
            //Creates an array from the input data
            var array = string.split(separator);
            //Creates a regular expression to look for empty items and deletes them
            for (let i = 0 ; i < array.length ; i++) {
                var regEx = /\w/;
                if (!(array[i].match(regEx))) {
                    array.splice(i, 1);
                    //decrements i to prevent skipping the next item
                    i--;
                }
            }
            return array;
        }
    }
})();