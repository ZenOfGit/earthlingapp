app.factory('answers', [function () {
    var o = {
        answers: []
    };
    return o;
}]);

app.controller('mainCtrl', ['$scope','$http', '$location', '$routeParams', 'answers',

    function($scope, $http, $location, $routeParams, answers){
        
        // bind conroller variable to factory variable
        $scope.answerList = answers.answers;

/*	$scope.getQuestions = function(){
		$http.get('/api/questions').then(function(response){
			$scope.todaysQuestion = response.data;
		});
	}
    
	$scope.getAnswers = function(){
		$http.get('/api/answers').then(function(response){
			$scope.answerList = response.data;
		});
	} */   
        
    $http.get('/api/questions').then(function(qresponse) {
        $scope.todaysQuestion = qresponse.data/*.records*/;
    });
            
    $http.get('/api/answers').then(function(aresponse) {
        $scope.answerList = aresponse.data/*.records*/;
    });
 
//	$scope.incrementCount = function(){
//		var id = $routeParams.id;
//		$http.put('/api/answers/'+id, $scope.answer).then(function(response){
//			window.location.href='#/answers';
//             answer.count += 1;
//		});
//	};
	$scope.updateAnswer = function(){
		var id = $routeParams.id;
		$http.put('/api/answers/'+id, $scope.answer).then(function(response){
			window.location.href='#/answers';
		});
	}        
        
        
//   $http.put('/api/answers/:_id').then(function(apresponse) {
//        $scope.answer = aresponse.data;
//    });
        
        $scope.incrementCount = function (answer) {
            answer.count += 1;
        };

}]);
