(function () {

    'use strict';
    angular.module('app.scores', []).controller('scoresCtrl', ['$scope', '$interval', function ($scope, $interval) {

        $scope.fullTime = 60;
        $scope.counter = $scope.fullTime;
        $scope.score = 0;

        var stopped;
        var tictacSound = new Audio('app/sounds/effects/Ticking-clock-sound.mp3');

        $scope.start = function () {

            tictacSound.play();

            stopped = $interval(function () {
                $scope.counter--;
                if ($scope.counter === 0) {
                    $scope.counter = 'STOP';
                    $interval.cancel(stopped);
                } else if ($scope.counter === 20 || $scope.counter === 40) {
                    tictacSound.currentTime = 0;
                    tictacSound.play();
                }
            }, 1000);
        };

        $scope.stop = function () {
            $interval.cancel(stopped);
            tictacSound.currentTime = 0;
            tictacSound.pause();

        };

        $scope.reset = function () {
            $scope.counter = $scope.fullTime;
            $interval.cancel(stopped);
            tictacSound.currentTime = 0;
            tictacSound.pause();
        };

        $scope.plusScore = function () {
            $scope.score++;
        };

        $scope.minusScore = function () {

        };
        $scope.resetScore = function () {
            $scope.score = 0;
        };

        $scope.newTournament = function () {

        }

    }]);
})();