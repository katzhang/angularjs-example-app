// angular.module('customServices', [])
// 	.factory('logService', function () {
// 	var messageCount = 0;
// 	return {
// 		log: function (msg) {
// 			console.log('(LOG + ' + messageCount++ + ')' + msg);
// 		}
// 	}
// 	})



angular.module('customServices', [])
	.service('logService', function () {
		return {
			messageCount: 0,
			log: function (msg) {
				console.log('Debug: ' + (this.messageCount++) + ' ' + msg);
			}
		}
	})