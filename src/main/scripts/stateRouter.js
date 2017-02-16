/**
 * Created by sasokan on 2/13/2017.
 */
// app.js
var routerApp = angular.module('routerApp', ['ui.router']);

// let's define the scotch controller that we call up in the about state
routerApp.controller('scotchController', function($scope) {

    $scope.message = 'test';

    $scope.scotches = [
        {
            name: 'Macallan 12',
            price: 50
        },
        {
            name: 'Chivas Regal Royal Salute',
            price: 10000
        },
        {
            name: 'Glenfiddich 1937',
            price: 20000
        }
    ];

});

routerApp.controller('headSeries1Contrlr', function($scope) {

});

routerApp.controller('contentSeries1Contrlr', function($scope) {

});

routerApp.controller('headSeries2Contrlr', function($scope) {

});

routerApp.controller('contentSeries2Contrlr', function($scope) {

});

routerApp.controller('sideMeduContrlr', function($scope) {
    $scope.openNav = function() {
        document.getElementById("mySidenav").style.width = "250px";
    };

     $scope.closeNav = function() {
        document.getElementById("mySidenav").style.width = "0";
    };
});

routerApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider

    // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            views: {
                'head@':{
                    templateUrl: 'homeHead.html'
                },
                'content@':{
                    templateUrl: 'homeContent.html'
                },
                'sidemenu@':{
                    templateUrl: 'sidemenu.html',
                    controller: 'sideMeduContrlr'
                }
            }
        })
        .state('home.series1', {
            url: '/series1',
            views: {
                'head@':{
                    templateUrl:'headSeries1.html',
                    controller: 'headSeries1Contrlr'
                },
                'content@':{
                    templateUrl:'contentSeries1.html',
                    controller: 'contentSeries1Contrlr'
                }
            }
        })
        .state('home.series2', {
            url: '/series2',
            views: {
                'head@':{
                    templateUrl:'headSeries2.html',
                    controller: 'headSeries2Contrlr'
                },
                'content@':{
                    templateUrl:'contentSeries2.html',
                    controller: 'contentSeries2Contrlr'
                }
            }
        })



        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('about', {
            url: '/about',
            views: {

                // the main template will be placed here (relatively named)
                '': {templateUrl: 'partial-about.html'},

                // the child views will be defined here (absolutely named)
                'columnOne@about': {template: 'Look I am a column!'},

                // for column two, we'll define a separate controller
                'columnTwo@about': {
                    templateUrl: 'table-data.html',
                    controller: 'scotchController'
                }
            }
        });



});