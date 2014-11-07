var hoMyGodeApp = angular.module('hoMyGodeApp', ['ngRoute']);

///Routes

hoMyGodeApp.config(function($routeProvider) {
	$routeProvider

		//home
		.when('/', {
			templateUrl: 'pages/home.html',
			controller: 'mainController'
		})

		//list

		.when('/list/:regionId?', {
			templateUrl: 'pages/list.html',
			controller: 'listController'
		})

		//login

		.when('/login', {
			templateUrl: 'pages/login.html',
			controller: 'loginController'
		})
		
		.otherwise({redirectTo:'/'})
		
		;
});



hoMyGodeApp.controller('mainController', function($scope, $route, $routeParams){
	
	$scope.params = $routeParams;

});


hoMyGodeApp.controller('listController', function($scope){
	
});

hoMyGodeApp.controller('loginController', function($scope){
	
});
