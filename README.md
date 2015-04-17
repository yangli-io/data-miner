# data-miner
A tool to mine data from the internet.
This tool is simple to use and follows some of the $http syntax you see with front-end frameworks such as AngularJS.
To traverse through the dom, it uses jQuery's syntax

##Why I created this

I like to mine data from the internet, for most modern websites that can be done easily by using their APIs.  With older sites this is much harder so I created data-miner. data-miner uses the syntax frontend engineers might be familiar with.  Data mine fetches the data and then uses jquery to find the dom elements containing the data.  It's really simple give it a try today!

##Install
````
npm install data-miner
````

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

##Future Versions

For future versions, the plan is to add some header capability with the get requests.
