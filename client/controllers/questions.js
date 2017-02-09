angular.module('myApp')

// Questions Controller
.controller('QuestionsController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
	console.log('QuestionsController loaded...');
 
 
//Get Question
	$scope.getQuestions = function(){
		$http.get('/api/questions.json').then(function(questData){
			$scope.quests = questData;
		});       
    }
}]);
