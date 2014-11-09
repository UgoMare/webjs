var hoMyGodeApp = angular.module('hoMyGodeApp', ['ngRoute']);

///Routes

// $products = [
// 	{id: 1,  name: "produit1", descr: "Ceci est un produit", category: "cat", prix: "10", seller: "seller1", thumb "images/thumb.png", created_at: Date.new, phone_number:" 0622334455"},
// 	{id: 2,  name: "produit1", descr: "Ceci est un produit", category: "cat", prix: "10", seller: "seller1", thumb "images/thumb.png", created_at: Date.new, phone_number:" 0622334455"},
// 	{id: 3,  name: "produit1", descr: "Ceci est un produit", category: "cat", prix: "10", seller: "seller1", thumb "images/thumb.png", created_at: Date.new, phone_number:" 0622334455"},
// 	{id: 4,  name: "produit1", descr: "Ceci est un produit", category: "cat", prix: "10", seller: "seller1", thumb "images/thumb.png", created_at: Date.new, phone_number:" 0622334455"},
// 	{id: 5,  name: "produit1", descr: "Ceci est un produit", category: "cat", prix: "10", seller: "seller1", thumb "images/thumb.png", created_at: Date.new, phone_number:" 0622334455"},
// 	{id: 6,  name: "produit1", descr: "Ceci est un produit", category: "cat", prix: "10", seller: "seller1", thumb "images/thumb.png", created_at: Date.new, phone_number:" 0622334455"},
// 	{id: 7,  name: "produit1", descr: "Ceci est un produit", category: "cat", prix: "10", seller: "seller1", thumb "images/thumb.png", created_at: Date.new, phone_number:" 0622334455"},
// 	{id: 8,  name: "produit1", descr: "Ceci est un produit", category: "cat", prix: "10", seller: "seller1", thumb "images/thumb.png", created_at: Date.new, phone_number:" 0622334455"},
// 	{id: 9,  name: "produit1", descr: "Ceci est un produit", category: "cat", prix: "10", seller: "seller1", thumb "images/thumb.png", created_at: Date.new, phone_number:" 0622334455"},
// 	{id: 10, name: "produit1", descr: "Ceci est un produit", category: "cat", prix: "10", seller: "seller1", thumb "images/thumb.png", created_at: Date.new, phone_number:" 0622334455"}
// ];

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
	$scope.products = [
		{id: 1,  name: "produit1",  descr: "Ceci est un produit", category: "cat1",  price: "10", seller: "seller1",  location: "location1",  thumb: "images/thumb.png", created_at: new Date(), phone_number:"0622334455"},
		{id: 2,  name: "produit2",  descr: "Ceci est un produit", category: "cat2",  price: "10", seller: "seller2",  location: "location2",  thumb: "images/thumb.png", created_at: new Date(), phone_number:"0622334455"},
		{id: 3,  name: "produit3",  descr: "Ceci est un produit", category: "cat3",  price: "10", seller: "seller3",  location: "location3",  thumb: "images/thumb.png", created_at: new Date(), phone_number:"0622334455"},
		{id: 4,  name: "produit4",  descr: "Ceci est un produit", category: "cat4",  price: "10", seller: "seller4",  location: "location4",  thumb: "images/thumb.png", created_at: new Date(), phone_number:"0622334455"},
		{id: 5,  name: "produit5",  descr: "Ceci est un produit", category: "cat5",  price: "10", seller: "seller5",  location: "location5",  thumb: "images/thumb.png", created_at: new Date(), phone_number:"0622334455"},
		{id: 6,  name: "produit6",  descr: "Ceci est un produit", category: "cat6",  price: "10", seller: "seller6",  location: "location6",  thumb: "images/thumb.png", created_at: new Date(), phone_number:"0622334455"},
		{id: 7,  name: "produit7",  descr: "Ceci est un produit", category: "cat7",  price: "10", seller: "seller7",  location: "location7",  thumb: "images/thumb.png", created_at: new Date(), phone_number:"0622334455"},
		{id: 8,  name: "produit8",  descr: "Ceci est un produit", category: "cat8",  price: "10", seller: "seller8",  location: "location8",  thumb: "images/thumb.png", created_at: new Date(), phone_number:"0622334455"},
		{id: 9,  name: "produit9",  descr: "Ceci est un produit", category: "cat9",  price: "10", seller: "seller9",  location: "location9",  thumb: "images/thumb.png", created_at: new Date(), phone_number:"0622334455"},
		{id: 10, name: "produit10", descr: "Ceci est un produit", category: "cat10", price: "10", seller: "seller10", location: "location10", thumb: "images/thumb.png", created_at: new Date(), phone_number:"0622334455"}
	];
});

hoMyGodeApp.controller('loginController', function($scope){
	
});
