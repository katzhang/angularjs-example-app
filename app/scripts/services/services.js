// angular.module('customServices', [])
// 	.factory('logService', function () {
// 	var messageCount = 0;
// 	return {
// 		log: function (msg) {
// 			console.log('(LOG + ' + messageCount++ + ')' + msg);
// 		}
// 	}
// 	})

var baseLogger = function () {
	this.messageCount = 0;
	this.log = function (msg) {
		console.log(this.msgType + ": " + (this.messageCount++) + " " + msg);
}
};
var debugLogger = function () { };
debugLogger.prototype = new baseLogger();
debugLogger.prototype.msgType = "Debug";

var errorLogger = function () { };
errorLogger.prototype = new baseLogger();
errorLogger.prototype.msgType = "Error";

angular.module('customServices', [])
	.service('logService', function () {
		return {
			messageCount: 0,
			log: function (msg) {
				console.log('Debug: ' + (this.messageCount++) + ' ' + msg);
			}
		}
	})