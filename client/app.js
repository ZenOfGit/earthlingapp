var app = angular.module('qotd', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider.when('/', {
		controller:'mainCtrl',
		templateUrl: 'templates/pages/answer-list.html'
	})
	.when('/question', {
		controller:'mainCtrl',
		templateUrl: 'templates/pages/answer-list.html'
	})
	.when('/results',{
		controller:'mainCtrl',
		templateUrl: 'templates/pages/result-list.html'
	})
	.otherwise({
		redirectTo: '/'
	});
});