/**
 * Home controller
 */

(function() {
    angular
        .module('quizApp')
        .controller('homeController', homeController);
    
    homeController.$inject = ['$scope'];

    function homeController($scope) {
        var vm = this;
        vm.testMsg = "Hello world";
    }

})();
