(function () {

    'use strict';
    angular.module('app.scores', []).controller('scoresCtrl', ['$scope', '$timeout', function($scope, $timeout) {

        $scope.counter = 60;
        var stopped;

        $scope.countdown = function() {
            stopped = $timeout(function() {
                $scope.counter--;
                $scope.countdown();
            }, 1000);
        };


        $scope.stop = function(){
            $timeout.cancel(stopped);

        };

        $scope.reset = function () {
            $scope.counter = 60;
        }



    }]);
})();