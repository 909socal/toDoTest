'use strict';

var app = angular.module('someApp');

app.controller('listCtrl', function($scope, $state, Task){
  	console.log('Your in listCtrl')


  $scope.addSymbol = function(){
    Stocks.addMyTask ($scope.myTask);
  };

});