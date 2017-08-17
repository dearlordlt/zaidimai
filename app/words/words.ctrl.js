(function () {

    'use strict';
    angular.module('app.words', []).controller('wordsCtrl', ['$scope', '$interval', function($scope, $interval) {

        $scope.sentences = [
            ['Vestuvės nebūtų linksmos be ___', []],
            ['Mūsų dienos kaip ___', []],
            ['Jaunikis šį vakarą atrodo ___', []],
            ['Stovi bernelis vidury lauko,___ išsitraukęs kepurėlėlę smauko!', []],
            ['Nuo šitos šventės man jau ___', []],
            ['Per šokius mes būtinai ___', []],
            ['Jaunoji pametė savo ___', []],
            ['Švesiu kol ___', []],
            ['Muzikantai visą vakarą ___', []],
            ['Juokiasi puodas, kad___', []],
            ['O pagroki, armonika, man___', []],
            ['Bebras, gandras, lašiša,___', []],
            ['Vakaras neprailgs, nes yra ___', []],
        ];

        $scope.step = 0;
        $scope.newWord = '';
        $scope.auto = false;

        $scope.makeStep = function(dir) {
            $scope.step += dir;

            if($scope.step > $scope.sentences.length -1) {
                $scope.step = 0;
            }

            if($scope.step < 0) {
                $scope.step = ($scope.sentences.length -1);
            }
        };

        $scope.addWord = function() {
            var newWord = $scope.sentences[$scope.step][0].replace('___', $scope.newWord.toUpperCase());
            $scope.sentences[$scope.step][1].push(newWord);
            $scope.newWord = '';
        };

        $scope.removeWord = function(index) {
            $scope.sentences[$scope.step][1].splice(index, 1);
        };

        var stop;
        $scope.toggleAuto = function() {
            if(!$scope.auto) {
                stop = $interval(function() {
                    $scope.makeStep(1);
                }, 9000);
            } else {
                $interval.cancel(stop);
            }
            $scope.auto = !$scope.auto;
        };

    }]);
    
})();