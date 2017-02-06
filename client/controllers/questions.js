var myApp = angular.module('myApp');

// Questions Controller
myApp.controller('QuestionsController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
	console.log('QuestionsController loaded...');
 
//Get Question
	$scope.getQuestions = function(){
		$http.get('/api/questions').then(function(response){
			$scope.questions = response;
		});
    }
}]);