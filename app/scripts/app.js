'use strict';

/**
 * @ngdoc overview
 * @name exampleApp
 * @description
 * # exampleApp
 *
 * Main module of the application.
 */
angular.module('exampleApp', [])
  .controller('defaultCtrl', function ($scope) {

    $scope.todos = [
      {action: 'Get groceries', complete: false},
      {action: 'Call plumber', complete: false},
      {action: 'Buy running shoes', complete: true},
      {action: 'Buy flowers', complete: false},
      {action: 'Call family', complete: false}
    ]

    $scope.buttonNames = ["Red", "Green", "Blue"];

    $scope.data = {
      rowColor: "Blue",
      columnColor: "Green"
    };

    $scope.handleEvent = function (e) {
      console.log('event type: ' + e.type);
      $scope.data.columnColor = e.type == "mouseenter" ? "Green" : "Blue";
    }
  })