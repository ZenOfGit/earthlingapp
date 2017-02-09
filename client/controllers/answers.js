angular.module('myApp')

// Answers Cnotroller
.controller('AnswersController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
	console.log('AnswersController loaded...');

// Get Answers
	$scope.getAnswers = function(){
		$http.get('/api/answers.json').then(function(response){
			$scope.answer = response;
		});
	}

// Update Answers
	$scope.updateAnswers = function(){
		var id = $routeParams.id;
		$http.put('/api/answers/'+id).then(function(response){
			$scope.answer = response;
		});
	}
}]);
