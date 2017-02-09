angular.module('myApp')

.directive('answers', function(){
    return{
        restrict: 'E',
        templateUrl: '/client/views/answers.html'
        };
    })
    .directive('results', function(){
    return{
        restrict: 'E',
        templateUrl: '/client/views/results.html'
        };
    });
