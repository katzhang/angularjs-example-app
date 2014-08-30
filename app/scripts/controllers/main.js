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
		return function (scope, element, attrs) {
			var data = scope[attrs['unorderedList']];
			var propertyExpression = attrs['listProperty'];
			if (angular.isArray(data)) {
				var listElem = angular.element('<ul>');
				element.append(listElem);
				for (var i = 0; i < data.length; i++) {
					var itemElement = angular.element('<li>')
						.text(scope.$eval(propertyExpression, data[i]));
					listElem.append(itemElement);
				}
			}
		}
	})
	.controller('defaultCtrl', function ($scope) {
		$scope.products = [
			{ name: "Apples", category: "Fruit", price: 1.20, expiry: 10 },
			{ name: "Bananas", category: "Fruit", price: 2.42, expiry: 7 },
			{ name: "Pears", category: "Fruit", price: 2.02, expiry: 6 }
		];

	})
