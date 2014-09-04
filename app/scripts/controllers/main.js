'use strict';

/**
 * @ngdoc function
 * @name exampleApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the exampleApp
 */
angular.module('exampleApp', ['customDirectives', 'customServices'])
	.controller('defaultCtrl', function ($scope, logService) {
		$scope.data = {
			cities: ["London", "New York", "Paris"],
			totalClicks: 0
		};

		$scope.$watch("data.totalClicks", function (newVal) {
			logService.log("total click count: " + newVal);
		})

	})

