(function () {

    'use strict';
    angular.module('app.scores', []).controller('scoresCtrl', ['$scope', '$timeout', function ($scope, $timeout) {

        $scope.fullTime = 5;
        $scope.counter = $scope.fullTime;
        $scope.score = 0;
        var stopped;

        $scope.start = function () {
            stopped = $timeout(function () {
                $scope.counter--;
                if ($scope.counter > -1) {
                    $scope.start();
                } else {
                    $scope.counter = 'STOP'
                }
            }, 1000);
        };

        $scope.stop = function () {
            $timeout.cancel(stopped);

        };

        $scope.reset = function () {
            $scope.counter = $scope.fullTime;
            $timeout.cancel(stopped);
        };

        $scope.plusScore = function () {
            $scope.score++;
        };

        $scope.minusScore = function () {
            $scope.score--;
        };
        $scope.resetScore = function () {
            $scope.score = 0;
        };


    }]);
})();