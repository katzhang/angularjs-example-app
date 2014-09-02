'use strict';

/**
 * @ngdoc function
 * @name exampleApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the exampleApp
 */
angular.module('exampleApp', [])
	.directive('unorderedList', function () {
		return {
			link: function (scope, element, attrs) {
				scope.data = scope[attrs['unorderedList']];
			},
			restrict: 'A',
			template: "<ul><li ng-repeat='item in data'>" + "{{item.price | currency}}</li></ul>"
		}
	})
	.controller('defaultCtrl', function ($scope) {
		$scope.products = [
			{ name: "Apples", category: "Fruit", price: 1.20, expiry: 10 },
			{ name: "Bananas", category: "Fruit", price: 2.42, expiry: 7 },
			{ name: "Pears", category: "Fruit", price: 2.02, expiry: 6 }
		];

	})
