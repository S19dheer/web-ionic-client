'use strict';

angular.module('crudWebClientApp').controller('UserCtrl', function($scope, $http, configuration) {
    //debugger;

    $http.get(configuration.get).success(function(data) {
    	$scope.data = data;
    });

    $scope.submit = function(city) {
    		$http.post(configuration.search,{currentCity:city}).success(function(data) {
    			console.log(data);
    			$scope.data = data;
    		});
    	};

});