'use strict';

/**
 * @ngdoc function
 * @name exampleApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the exampleApp
 */

angular.module('exampleApp', [])
	.controller('defaultCtrl', function ($scope, $http) {

		$scope.loadData = function () {
			$http.get('scripts/productData.json').then(function (data) {
				console.log(data);
				$scope.products = data;
			})
		}
	})

