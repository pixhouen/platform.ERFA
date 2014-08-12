'use strict';

/**
 * @ngdoc function
 * @name platformerfaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the platformerfaApp
 */
angular.module('platformerfaApp')
  .controller('MainCtrl', function ($scope, $resource, $rootScope, $interval) {
    var Teams = $resource("http://localhost:3000/erfa/stats?member_ids=[270, 10, 49]&start=2014-05-01&finish=2015-01-01&workout_id=3631")

    $interval(function(){
      var teams = Teams.get().$promise.then(function(data){
        $scope.teams = data.teams
      });
    }, 1000);

  });
