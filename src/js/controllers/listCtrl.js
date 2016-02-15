'use strict';

var app = angular.module('someApp');

app.controller('listCtrl',["$scope", "$http", function($scope, $http) {
  	console.log('Your in listCtrl')


  $scope.addClick = function(){
    var description = $scope.myTask
    var date= $scope.myDate
    
    console.log("description:", description, "date:", date)
    $http.post('/users/register', {description: description, date: date})

  };

 $scope.deleteName = function(value){
    var index = this.$index;
	  //console.log(index);
	  Stocks.deleteFromAray(index)
	}

  $http.get('/users/all')
  .then(function(usersAll){
    console.log('usersAll', usersAll)
    $scope.users = usersAll.data
    console.log("users data", $scope.users)
  })
}]);




