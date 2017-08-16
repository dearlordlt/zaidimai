(function () {

    'use strict';
    angular.module('app.music', []).controller('musicCtrl', ['$scope', function ($scope) {


        var songsArray = [
            'abbaDancingQueen',
            'aceOfBaseBeautifulLife',
            'antisAlyvos',
            'georgeMichaelCarelessWhisper',
            'kellyFamilyAnAngel',
            'marijonasMikutaviciusTrysMilijonai',
            'metallicaEnterSandmanSmoothJazz',
            'poliarizuotiStiklaiMedziaiBeLapu',
            'redHotChiliPeppersGiveItAway',
            'stasysPovilaitisSvieskiManVel',
            'theRollingStonesSatisfaction',
            'twoUnlimitedNoLimit'
        ];

        var songs = {};
        var songStarts = [
            15,
            15,
            15,
            15,
            15,
            15,
            15,
            15,
            15,
            15,
            15,
            15000
        ];

        for (var song in songsArray) {
            songs[songsArray[song]] = new Audio('app/sounds/songs/'+ songsArray[song] +'.mp3');

            songs[songsArray[song]].addEventListener('load', function() {
                console.log(song, 'loaded');
                songs[songsArray[song]].currentTime = songStarts[song];

                $scope[songsArray[song]] = function (rate) {
                    songs[songsArray[song]].playbackRate = rate;
                    console.log(songs[songsArray[song]].currentTime, songs);

                    if (songs[songsArray[song]].currentTime > songStarts[song]) {
                        songs[songsArray[song]].currentTime = songStarts[song];
                        songs[songsArray[song]].pause();
                    } else {
                        songs[songsArray[song]].currentTime = songStarts[song];
                        songs[songsArray[song]].play();
                    }
                };
            }, true);

        }
    }]);

})();