'use strict';

/* Services */

var services = angular.module('JConst.services', []);

services.value('version', '1.0');

services.factory('projectFetcher', function($q, $timeout, $http) {
    var ret = {
        fetch: function(callback) {
            
            var deferred = $q.defer();

            $timeout(function() {
                $http.get('json/projects.json').success(function(data) {
                    deferred.resolve(data);
                });
            }, 30);

            return deferred.promise;
        }
    };

    return ret;
});

services.factory('contactFetcher', function($q, $timeout, $http) {
    var ret = {
        fetch: function(callback) {
            
            var deferred = $q.defer();

            $timeout(function() {
                $http.get('json/contact.json').success(function(data) {
                    deferred.resolve(data);
                });
            }, 30);

            return deferred.promise;
        }
    };

    return ret;
});