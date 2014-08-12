'use strict';

describe('Directive: teamScore', function () {

  // load the directive's module
  beforeEach(module('platformerfaApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<team-score></team-score>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the teamScore directive');
  }));
});
