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

		$scope.price = "100.23";
	})
	.directive('evalExpression', function ($parse) {
		return function(scope, element, attrs) {
			scope.$watch(attrs['evalExpression'], function (newValue) {
				try {
					var expressionFn = $parse(scope.expr);
					var result = expressionFn(scope);
					if (result == undefined) {
						result = "no result";
					}
				} catch(err) {
					result = "cannot evaluate expression";
				}
				element.text(result);
			})
		}
	})
