angular.module('qotd')

    .directive('navView', function(){
        return{
            restrict: 'E',
            templateUrl: '/templates/pages/nav-view.html'
        };
    })
    .directive('pageHeader', function(){
        return{
            restrict: 'E',
            templateUrl: '/templates/pages/page-header.html'
        };
    })
    .directive('questionPanel', function(){
        return{
            restrict: 'E',
            templateUrl: '/templates/pages/question-panel.html'
        };
    })
    .directive('answerList', function(){
        return{
            restrict: 'E',
            templateUrl: '/templates/pages/answer-list.html'
        };
    })
    .directive('resultList', function(){
        return{
            restrict: 'E',
            templateUrl: '/templates/pages/result-list.html'
        };
    })
    .directive('pageFooter', function(){
        return{
            restrict: 'E',
            templateUrl: '/templates/pages/page-footer.html'
        };
    });