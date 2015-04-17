var dataMiner = require('./index');

dataMiner.fetch('http://github.com/yangli1990/angular-pageblock').success(function($){
	console.log($('.social-count.js-social-count').text().trim());
}).error(function(data){
	console.log(data);
}).finally(function(){
	console.log('finished');
})