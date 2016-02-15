'use strict';

var app = angular.module('someApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('list', { url: '/', templateUrl: '/partials/list/list.html', controller: 'listCtrl' })

  $urlRouterProvider.otherwise('/');
});

'use strict';

var app = angular.module('someApp');

app.controller('listCtrl', function() {
  console.log('listCtrl');
});
