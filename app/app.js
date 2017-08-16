(function () {

    'use strict';
    angular.module('app', [
        'app.home',
        'app.music',
        'app.words',
        'app.scores',
        'ui.router'
    ]).config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
        function ($stateProvider, $urlRouterProvider, $locationProvider) {
            $stateProvider
                .state({
                    name: 'app-home',
                    url: '/home',
                    templateUrl: 'app/home/home.html',
                    controller: 'homeCtrl'
                }).state({
                    name: 'app-scores',
                    url: '/scores',
                    templateUrl: 'app/scores/scores.html',
                    controller: 'scoresCtrl'
                }).state({
                    name: 'app-music',
                    url: '/music',
                    templateUrl: 'app/music/music.html',
                    controller: 'musicCtrl'
                }).state({
                    name: 'app-words',
                    url: '/words',
                    templateUrl: 'app/words/words.html',
                    controller: 'wordsCtrl'
                });

            $urlRouterProvider.otherwise('/home');

            $locationProvider.html5Mode(true);

        }]).run(['$state', function ($state) {
        console.log($state.get());
    }]);

})();