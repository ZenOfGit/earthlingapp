var myApp = angular.module('myApp',['ngRoute']);

myApp.config(function($routeProvider){
	$routeProvider.when('/', {
		controller:'QuestionsController',
		templateUrl: 'views/questions.html'
	})
	.when('/questions', {
		controller:'QuestionsController',
		templateUrl: 'views/questions.html'
	})
	.when('/answers',{
		controller:'AnswersController',
		templateUrl: 'views/answers.html'
	})
	.when('/answers/update/:id',{
		controller:'AnswersController',
		templateUrl: 'views/answers.html'
	})
	.otherwise({
		redirectTo: '/'
	});
});