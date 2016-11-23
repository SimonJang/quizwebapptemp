/**
 * Factory
 */

(function() {
    angular.module('quizApp')
        .factory('reeksBuilder', reeksBuilder)

    function reeksBuilder() {
        this.landen = [];

        this.getLanden = function(arg) {
            landen = arg;
        }

        var test;

    }

})();
