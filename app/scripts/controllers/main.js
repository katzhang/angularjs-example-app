'use strict';

/**
 * @ngdoc function
 * @name exampleApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the exampleApp
 */
angular.module('exampleApp', [])
	.controller('defaultCtrl', function ($scope) {
		$scope.products = [
			{ name: "Apples", category: "Fruit", price: 1.20, expiry: 10 },
			{ name: "Bananas", category: "Fruit", price: 2.42, expiry: 7 },
			{ name: "Pears", category: "Fruit", price: 2.02, expiry: 6 }
		];

		$scope.changeData = function () {
			$scope.products.push({ name: "Cherries", price: 4.02 });
			for (var i = 0; i < $scope.products.length; i++) {
				$scope.products[i].price++;
			}
		}

	})
	.directive('simpleRepeater', function() {
		return {
			scope: {
				data: "=source",
				propName: "@itemName"
			},
			transclude: 'element',
			compile: function (element, attrs, transcludeFn) {
				return function ($scope, $element, $attr) {
					$scope.$watch("data.length", function () {
						var parent = $element.parent();
						parent.children().remove();
						for (var i = 0; i < $scope.data.length; i++) {
							var childScope = $scope.$new();
							childScope[$scope.propName] = $scope.data[i];
							transcludeFn(childScope, function (clone) {
								parent.append(clone);
							})
						}
					})
				}
			}
		}
	})
