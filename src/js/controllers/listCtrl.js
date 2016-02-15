'use strict';

var app = angular.module('someApp');

app.controller('listCtrl', function($scope, $state ){
  	console.log('Your in listCtrl')


  $scope.addSymbol = function(){
    Task.addMyTask($scope.myTask);
    Task.addMyTask($scope.myDate);
    $scope.Task = tasksAll

  };

 $scope.deleteName = function(value){
    var index = this.$index;
	  //console.log(index);
	  Stocks.deleteFromAray(index)
});