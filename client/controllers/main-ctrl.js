
app.factory('answers', [function () {
    var o = {
        answers: []
    };
    return o;
}]);

app.controller('mainCtrl', ['$scope','$http', 'answers',

    function($scope, $http, answers){
        //$scope.todaysQuestion = 'Which method of relaxation do you prefer?';
        //$scope.answerList = [
        //    {answer_text: 'Soothing music', qid: '1', votes: 0},
        //    {answer_text: 'Warm bath', qid: '2', votes: 0},
        //    {answer_text: 'Tai Chi', qid: '3', votes: 0},
        //    {answer_text: 'Chai Tea', qid: '4', votes: 0}
        //];
        
        // bind conroller variable to factory variable
        $scope.answerList = answers.answers;

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
        
//   $http.put('/client/assets/data/answers.json').then(function(apresponse) {
        $scope.incrementCount = function (answer) {
            answer.count += 1;
        };
//    });
}]);

