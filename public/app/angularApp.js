/**
 * Angular JS main
 */

(function () {
    angular.module('quizApp', ['ngRoute']).config(moduleConfig);

    moduleConfig.$inject = ['$routeProvider'];

    function moduleConfig($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'html/homeView.html',
            controller: 'homeController',
            controllerAs: 'homeCtrl'
        })
    }
})();
