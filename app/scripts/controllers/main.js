'use strict';

/**
 * @ngdoc function
 * @name exampleApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the exampleApp
 */

angular.module('exampleApp', [])
	.controller('defaultCtrl', function ($scope, $exceptionHandler) {

		$scope.throwEx = function () {
			try {
				throw new Error("Triggered bia");
			} catch (ex) {
				$exceptionHandler(ex.message, "Button click");
			}
		}
	})
	.factory('$exceptionHandler', function ($log) {
		return function (exception, cause) {
			$log.error('Message: ' + exception.message + ' (Cause: ' + cause + ')');
		}
	})
