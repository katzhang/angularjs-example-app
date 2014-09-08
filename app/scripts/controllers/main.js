'use strict';

/**
 * @ngdoc function
 * @name exampleApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the exampleApp
 */

angular.module('exampleApp', [])
	.controller('defaultCtrl', function ($scope, $location, $anchorScroll) {

		$scope.itemCount = 50;
		$scope.items = [];

		for (var i = 0; i < $scope.itemCount; i++) {
			$scope.items[i] = "Item " + i;
		}

		$scope.show = function (id) {
			$location.hash(id);
		}
	})
