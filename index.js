var request 	= require('request'), 
  	env 		= require('jsdom').env;

module.exports = new dataMiner();


function dataMiner(){

	this.fetch = function(url){
		var successCallback = function(){};
		var errorCallback = function(){};
		var finallyCallback = function(){}; 

		setTimeout(function(){
			request(url, function (error, response, body) {
				if (!error && response.statusCode == 200) {
					env(body, function (errors, window) {
						if (!errors){
							var $ = require('jquery')(window);
							successCallback($);
							finallyCallback();
						} else {
							errorCallback({error: errors, stage: "failed at DOMify"});
							finallyCallback();
						}
					});
				} else {
					errorCallback({error: error, response: response, stage: "failed at GET"});
					finallyCallback();
				}
			});
		}, 0)

		var callback = {
			success: function(cb){
				successCallback = cb;
				return callback;
			},
			error: function(cb){
				errorCallback = cb;
				return callback;
			},
			finally: function(cb){
				finallyCallback = cb;
				return callback;
			}
		}

		return callback;
	}
}
