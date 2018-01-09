var app = angular.module("myApp", []);
app.controller("myCtrl", function($scope, $http){
    
    
    $http.get('js/data.json').then(function(response){
        $scope.usuarios = response.data;
        console.log($scope.usuarios);
    });

    
})
    