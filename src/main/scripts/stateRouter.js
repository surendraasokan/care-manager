/**
 * Created by sasokan on 2/13/2017.
 */
// app.js
var routerApp = angular.module('routerApp', ['ui.router']);

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
        });



});