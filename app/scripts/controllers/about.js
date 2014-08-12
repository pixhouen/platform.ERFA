'use strict';

/**
 * @ngdoc function
 * @name platformerfaApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the platformerfaApp
 */
angular.module('platformerfaApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
