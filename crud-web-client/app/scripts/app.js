'use strict';

/**
 * @ngdoc overview
 * @name crudWebClientApp
 * @description
 * @eggs.io
 * # crudWebClientApp
 *
 * Main module of the application.
 */
angular
    .module('crudWebClientApp', [
        'ngAnimate',
        'ngAria',
        'ngCookies',
        'ngMessages',
        'ngResource',
        /*'ngRoute',*/
        'ngSanitize',
        'ngTouch',
        'services.config',
        'ui.router'
    ])
    .config(function($stateProvider, $urlRouterProvider) {
        /*$routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/user', {
                templateUrl: 'views/user.html',
                controller: 'UserCtrl'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl'
            })
            .when('/admin', {
                templateUrl: 'views/adminuser.html',
                controller: 'AdminCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });*/
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .state('user',{
                url:'/user',
                templateUrl:'views/user.html',
                controller:'UserCtrl'
            })
            .state('about',{
                url:'/about',
                templateUrl:'views/about.html',
                controller:'AboutCtrl'
            })
            .state('admin',{
                url:'/admin',
                templateUrl:'views/adminuser.html',
                controller:'AdminCtrl'
            });
        $urlRouterProvider.otherwise('/home');
    })

.directive('onEsc', function() {
    return function(scope, elm, attr) {
        elm.bind('keydown', function(e) {
            if (e.keyCode === 27) {
                scope.$apply(attr.onEsc);
            }
        });
    };
})

.directive('onEnter', function() {
    return function(scope, elm, attr) {
        elm.bind('keypress', function(e) {
            if (e.keyCode === 13) {
                scope.$apply(attr.onEnter);
            }
        });
    };
})

.directive('inlineEdit', function($timeout) {
    return {
        scope: {
            model: '=inlineEdit',
            handleSave: '&onSave',
            handleCancel: '&onCancel'
        },
        link: function(scope, elm, attr) {
            var previousValue;

            scope.edit = function() {
                scope.editMode = true;
                previousValue = scope.model;

                $timeout(function() {
                    elm.find('input')[0].focus();
                }, 0, false);
            };
            scope.save = function() {
                scope.editMode = false;
                scope.handleSave({
                    value: scope.model
                });
            };
            scope.cancel = function() {
                scope.editMode = false;
                scope.model = previousValue;
                scope.handleCancel({
                    value: scope.model
                });
            };
        },
        templateUrl: './views/inline-edit.html'
    };
});
