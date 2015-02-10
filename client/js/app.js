var hoMyGodeApp = angular.module('hoMyGodeApp', ['ngRoute', 'appControllers', 'appServices']);
var appControllers = angular.module('appServices', []);
var appServices = angular.module('appControllers', []);

var options = {};
options.api = {};
options.api.base_url = "http://localhost:3001";

///Routes

hoMyGodeApp.config(function($routeProvider) {
	$routeProvider

		//home
		.when('/', {
			templateUrl: 'pages/home.html',
			controller: 'mainController'
		})

		//product list

		.when('/product', {
			templateUrl: 'pages/list_product.html',
			controller: 'productsController'
		})

		//product new

		.when('/product/new', {
			templateUrl: 'pages/new_product.html',
			controller: 'productNewController'
		})

		//product

		.when('/product/:id', {
			templateUrl: 'pages/product.html',
			controller: 'productController'
		})

		//product message

		.when('/product/:id/message', {
			templateUrl: 'pages/send_message.html',
			controller: 'productMessageController'
		})

		//poduct edit

		.when('/product/:id/edit', {
			templateUrl: 'pages/edit_product.html',
			controller: 'productEditController'
		})

		//signIn

		.when('/signin', {
			templateUrl: 'pages/signIn.html',
			controller: 'adminUserController'
		})
		
		//signup

		.when('/register', {
			templateUrl: 'pages/register.html',
			controller: 'adminUserController'
		})

		.otherwise({redirectTo:'/'})

		;
});