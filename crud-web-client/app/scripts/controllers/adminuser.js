'use strict';

angular.module('crudWebClientApp')
.controller('AdminCtrl', function($scope, $http, configuration) {
    //To-Do string take from config file change
    $http.get(configuration.get).success(function(data) {
        $scope.data = data;
    });

    $scope.submit = function(city) {
        //To-Do string take from config file change
        $http.post(configuration.search, {
            currentCity: city
        }).success(function(data) {
            $scope.data = data;
        });
    };

    $scope.delete = function(value) {
        //To-Do string take from config file change
        $http.delete(configuration.delete, {
            params: {
                id: value._id
            }
        }).success(function(data) {
            console.log(data);
        });
    };

    
    $scope.update = function(value) {
        console.log(value);
        //To-Do string take from config file change
        $http.put(configuration.update, {
            id: value._id,
            city: value.address.city,
            state: value.address.state,
            ratings: value.ratings
        }).success(function(data) {
            console.log(data);
        })
    }

    $scope.cancelEdit = function(value) {
        console.log(value);
    }

});



/*$scope.edit = function(value) {
        console.log(value);
        $http.put('http://localhost:3000/update').success(function(data) {
            console.log(data);
        })

    }*/