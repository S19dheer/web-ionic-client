'use strict';



angular.module('crudWebClientApp').controller('AdminUserCtrl', function($scope, $http) {
    //To-Do string take from config file change
    $http.get('http://localhost:3000/get').success(function(data) {
        $scope.data = data;
    });

    $scope.submit = function(city) {
        //To-Do string take from config file change
        $http.post('http://localhost:3000/search', {
            currentCity: city
        }).success(function(data) {
            $scope.data = data;
        });
    };

    $scope.delete = function(value) {
        //To-Do string take from config file change
        $http.delete('http://localhost:3000/delete', {
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
        $http.put('http://localhost:3000/update', {
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
'use strict';



angular.module('crudWebClientApp').controller('AdminUserCtrl', function($scope, $http) {
    //To-Do string take from config file change
    $http.get('http://localhost:3000/get').success(function(data) {
        $scope.data = data;
    });

    $scope.submit = function(city) {
        //To-Do string take from config file change
        $http.post('http://localhost:3000/search', {
            currentCity: city
        }).success(function(data) {
            $scope.data = data;
        });
    };

    $scope.delete = function(value) {
        //To-Do string take from config file change
        $http.delete('http://localhost:3000/delete', {
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
        $http.put('http://localhost:3000/update', {
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
