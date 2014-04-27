'use strict';

/* Controllers */

var controllers = angular.module('JConst.controllers', []);

controllers.controller('projectsController', function($scope, projectFetcher) {
    projectFetcher.fetch().then(function(data) {
        $scope.projectList = data;
    })
});

controllers.controller('contactController', function($scope, contactFetcher) {
    contactFetcher.fetch().then(function(data) {
        $scope.contactList = data;
    })
});