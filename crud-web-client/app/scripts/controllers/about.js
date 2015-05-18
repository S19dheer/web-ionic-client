'use strict';

/**
 * @ngdoc function
 * @name crudWebClientApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the crudWebClientApp
 */
angular.module('crudWebClientApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
