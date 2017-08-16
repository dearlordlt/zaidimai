(function () {

    'use strict';
    angular.module('app.words', []).controller('wordsCtrl', ['$scope', function($scope) {

        $scope.sentences = [
            ['Vestuvės nebūtų linksmos be ___', []],
            ['Mūsų dienos kaip ___', []],
            ['Jaunikis šį vakarą atrodo ___', []],
            ['Muzikantai visą vakarą ___', []],
            ['Nuo šitos šventės man jau ___', []],
            ['Vakaras neprailgs, nes yra ___', []],
            ['Per šokius mes būtinai ___', []],
            ['Jaunoji pametė savo ___', []],
            ['Švesiu kol ___', []]
        ];

        $scope.step = 0;

    }]);
    
})();