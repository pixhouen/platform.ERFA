'use strict';

/**
 * @ngdoc directive
 * @name platformerfaApp.directive:teamScore
 * @description
 * # teamScore
 */
angular.module('platformerfaApp')
  .directive('teamScore', function ($rootScope, $interval) {
    return {      
      restrict: 'E',
      template: '<div class="team col-md-12"><div class="name col-md-3">Name: {{name}}</div><div class="count col-md-2">Count: {{results_count}}</div><div class="average-score">Average score: {{average_score}}</div><div class="finished_members">Finished members: {{finished_members}}</div></div>',
      scope: {
        name: '@name',
        results_count: '@resultsCount',
        average_score: '@averageScore',
        finished_members: '@finishedMembers',
      },
      link: function postLink(scope, element, attrs) {
        // scope.$on("TeamsUpdate", function (event, message) {
        //   message
        //   debugger
        // });
        
        attrs.$observe('name', function(newValue) {
        });
      	
	      // $interval(function(){
	      // 	request.refresh();
	      // }, attrs.interval);
      }
    };
  });
