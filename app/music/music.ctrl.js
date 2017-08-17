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
            30,
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


            songs['abbaDancingQueen'] = new Audio('app/sounds/songs/abbaDancingQueen.mp3');
            songs['aceOfBaseBeautifulLife'] = new Audio('app/sounds/songs/aceOfBaseBeautifulLife.mp3');
            songs['antisAlyvos'] = new Audio('app/sounds/songs/antisAlyvos.mp3');
            songs['georgeMichaelCarelessWhisper'] = new Audio('app/sounds/songs/georgeMichaelCarelessWhisper.mp3');
            songs['kellyFamilyAnAngel'] = new Audio('app/sounds/songs/kellyFamilyAnAngel.mp3');
            songs['marijonasMikutaviciusTrysMilijonai'] = new Audio('app/sounds/songs/marijonasMikutaviciusTrysMilijonai.mp3');
            songs['metallicaEnterSandmanSmoothJazz'] = new Audio('app/sounds/songs/metallicaEnterSandmanSmoothJazz.mp3');
            songs['poliarizuotiStiklaiMedziaiBeLapu'] = new Audio('app/sounds/songs/poliarizuotiStiklaiMedziaiBeLapu.mp3');
            songs['redHotChiliPeppersGiveItAway'] = new Audio('app/sounds/songs/redHotChiliPeppersGiveItAway.mp3');
            songs['stasysPovilaitisSvieskiManVel'] = new Audio('app/sounds/songs/stasysPovilaitisSvieskiManVel.mp3');
            songs['theRollingStonesSatisfaction'] = new Audio('app/sounds/songs/theRollingStonesSatisfaction.mp3');
            songs['twoUnlimitedNoLimit'] = new Audio('app/sounds/songs/twoUnlimitedNoLimit.mp3');

            songs['abbaDancingQueen'].onloadeddata = function() {
                songs['abbaDancingQueen'].currentTime = songStarts[0];
            };

            songs['aceOfBaseBeautifulLife'].onloadeddata = function() {
                songs['aceOfBaseBeautifulLife'].currentTime = songStarts[1];
            };

            songs['antisAlyvos'].onloadeddata = function() {
                songs['antisAlyvos'].currentTime = songStarts[2];
            };

            songs['georgeMichaelCarelessWhisper'].onloadeddata = function() {
                songs['georgeMichaelCarelessWhisper'].currentTime = songStarts[3];
            };

            songs['kellyFamilyAnAngel'].onloadeddata = function() {
                songs['kellyFamilyAnAngel'].currentTime = songStarts[4];
            };

            songs['marijonasMikutaviciusTrysMilijonai'].onloadeddata = function() {
                songs['marijonasMikutaviciusTrysMilijonai'].currentTime = songStarts[5];
            };

            songs['metallicaEnterSandmanSmoothJazz'].onloadeddata = function() {
                songs['metallicaEnterSandmanSmoothJazz'].currentTime = songStarts[6];
            };

            songs['poliarizuotiStiklaiMedziaiBeLapu'].onloadeddata = function() {
                songs['poliarizuotiStiklaiMedziaiBeLapu'].currentTime = songStarts[7];
            };

            songs['redHotChiliPeppersGiveItAway'].onloadeddata = function() {
                songs['redHotChiliPeppersGiveItAway'].currentTime = songStarts[8];
            };

            songs['stasysPovilaitisSvieskiManVel'].onloadeddata = function() {
                songs['stasysPovilaitisSvieskiManVel'].currentTime = songStarts[9];
            };

            songs['theRollingStonesSatisfaction'].onloadeddata = function() {
                songs['theRollingStonesSatisfaction'].currentTime = songStarts[10];
            };

            songs['twoUnlimitedNoLimit'].onloadeddata = function() {
                songs['twoUnlimitedNoLimit'].currentTime = songStarts[11];
            };

            $scope['abbaDancingQueen'] = function (rate) {
                var name = 'abbaDancingQueen';
                songs[name].playbackRate = rate;

                if (songs[name].currentTime > songStarts[0]) {
                    songs[name].currentTime = songStarts[0];
                    songs[name].pause();
                } else {
                    songs[name].currentTime = songStarts[0];
                    songs[name].play();
                }
            };

            $scope['aceOfBaseBeautifulLife'] = function (rate) {
                var name = 'aceOfBaseBeautifulLife';
                songs[name].playbackRate = rate;

                if (songs[name].currentTime > songStarts[1]) {
                    songs[name].currentTime = songStarts[1];
                    songs[name].pause();
                } else {
                    songs[name].currentTime = songStarts[1];
                    songs[name].play();
                }
            };

            $scope['antisAlyvos'] = function (rate) {
                var name = 'antisAlyvos';
                songs[name].playbackRate = rate;

                if (songs[name].currentTime > songStarts[2]) {
                    songs[name].currentTime = songStarts[2];
                    songs[name].pause();
                } else {
                    songs[name].currentTime = songStarts[2];
                    songs[name].play();
                }
            };

            $scope['georgeMichaelCarelessWhisper'] = function (rate) {
                var name = 'georgeMichaelCarelessWhisper';
                songs[name].playbackRate = rate;

                if (songs[name].currentTime > songStarts[3]) {
                    songs[name].currentTime = songStarts[3];
                    songs[name].pause();
                } else {
                    songs[name].currentTime = songStarts[3];
                    songs[name].play();
                }
            };

            $scope['kellyFamilyAnAngel'] = function (rate) {
                var name = 'kellyFamilyAnAngel';
                songs[name].playbackRate = rate;

                if (songs[name].currentTime > songStarts[4]) {
                    songs[name].currentTime = songStarts[4];
                    songs[name].pause();
                } else {
                    songs[name].currentTime = songStarts[4];
                    songs[name].play();
                }
            };

            $scope['marijonasMikutaviciusTrysMilijonai'] = function (rate) {
                var name = 'marijonasMikutaviciusTrysMilijonai';
                songs[name].playbackRate = rate;

                if (songs[name].currentTime > songStarts[5]) {
                    songs[name].currentTime = songStarts[5];
                    songs[name].pause();
                } else {
                    songs[name].currentTime = songStarts[5];
                    songs[name].play();
                }
            };

            $scope['metallicaEnterSandmanSmoothJazz'] = function (rate) {
                var name = 'metallicaEnterSandmanSmoothJazz';
                songs[name].playbackRate = rate;

                if (songs[name].currentTime > songStarts[6]) {
                    songs[name].currentTime = songStarts[6];
                    songs[name].pause();
                } else {
                    songs[name].currentTime = songStarts[6];
                    songs[name].play();
                }
            };

            $scope['poliarizuotiStiklaiMedziaiBeLapu'] = function (rate) {
                var name = 'poliarizuotiStiklaiMedziaiBeLapu';
                songs[name].playbackRate = rate;

                if (songs[name].currentTime > songStarts[7]) {
                    songs[name].currentTime = songStarts[7];
                    songs[name].pause();
                } else {
                    songs[name].currentTime = songStarts[7];
                    songs[name].play();
                }
            };

            $scope['redHotChiliPeppersGiveItAway'] = function (rate) {
                var name = 'redHotChiliPeppersGiveItAway';
                songs[name].playbackRate = rate;

                if (songs[name].currentTime > songStarts[8]) {
                    songs[name].currentTime = songStarts[8];
                    songs[name].pause();
                } else {
                    songs[name].currentTime = songStarts[8];
                    songs[name].play();
                }
            };

            $scope['stasysPovilaitisSvieskiManVel'] = function (rate) {
                var name = 'stasysPovilaitisSvieskiManVel';
                songs[name].playbackRate = rate;

                if (songs[name].currentTime > songStarts[9]) {
                    songs[name].currentTime = songStarts[9];
                    songs[name].pause();
                } else {
                    songs[name].currentTime = songStarts[9];
                    songs[name].play();
                }
            };

            $scope['theRollingStonesSatisfaction'] = function (rate) {
                var name = 'theRollingStonesSatisfaction';
                songs[name].playbackRate = rate;

                if (songs[name].currentTime > songStarts[10]) {
                    songs[name].currentTime = songStarts[10];
                    songs[name].pause();
                } else {
                    songs[name].currentTime = songStarts[10];
                    songs[name].play();
                }
            };

            $scope['twoUnlimitedNoLimit'] = function (rate) {
                var name = 'twoUnlimitedNoLimit';
                songs[name].playbackRate = rate;

                if (songs[name].currentTime > songStarts[11]) {
                    songs[name].currentTime = songStarts[11];
                    songs[name].pause();
                } else {
                    songs[name].currentTime = songStarts[11];
                    songs[name].play();
                }
            };

            

    }]);

})();