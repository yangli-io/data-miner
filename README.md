# data-miner
A tool to mine data from the internet.
This tool is simple to use and follows some of the $http syntax you see with front-end frameworks such as AngularJS.
To traverse through the dom, it uses jQuery's syntax

##Install
''''
npm install data-miner
''''

##Example

This example shows us how we can mine the the number of stars in a page

````javascript
var dataMiner = require('data-miner');

dataMiner.fetch('https://github.com/yangli1990/data-miner').success(function($){
	console.log($('.social-count.js-social-count').text().trim());
}).error(function(data){
	console.log(data);
}).finally(function(){
	console.log('finished');
})

````

##Why I created this

I was mining data from the internet and it was pretty complicated, so I created this to help me mine data.

##Future Versions

For future versions, the plan is to add some header capability with the get requests.
