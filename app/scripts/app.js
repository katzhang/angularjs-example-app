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
  .service("ZipCodes", function($rootscope) {
    return {
      setZipCode: function(type, zip) {
        this[type] = zip;
        $rootscope.$broadcast("zipCodeUpdated", {
          type: type, zipCode: zip
        })
      }
    }
  })
  .controller("simpleCtrl", function ($scope, ZipCodes) {
    $scope.$on("zipCodeUpdated", function (event, args) {
      $scope[args.type] = args.zipCode;
    });

    $scope.setAddress = function (type, zip) {
      ZipCodes.setZipCode(type, zip);
      console.log("Type: " + type, zip);
    }

    $scope.copyAdress = function () {
      $scope.zip = $scope.billingZip;
    }
  });