var hoMyGodeApp = angular.module('hoMyGodeApp', ['ngRoute']);


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

		.when('/product/:productId', {
			templateUrl: 'pages/product.html',
			controller: 'productController'
		})

		//product message

		.when('/product/:productId/message', {
			templateUrl: 'pages/send_message.html',
			controller: 'productMessageController'
		})



		//poduct edit

		.when('/product/:productId/edit', {
			templateUrl: 'pages/edit_product.html',
			controller: 'productEditController'
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

hoMyGodeApp.controller('productsController', function($scope){

	$scope.products = [
		{id: 1,  name: "produit1",  descr: "Ceci est un produit", category: "cat1",  price: "10", seller: "seller1",  region: "region1",  location: "location1",  zip_code: "12345", thumb: "images/thumb.png", created_at: new Date(), phone_number:"0622334455"},
		{id: 2,  name: "produit2",  descr: "Ceci est un produit", category: "cat2",  price: "10", seller: "seller2",  region: "region2",  location: "location2",  zip_code: "12345", thumb: "images/thumb.png", created_at: new Date(), phone_number:"0622334455"},
		{id: 3,  name: "produit3",  descr: "Ceci est un produit", category: "cat3",  price: "10", seller: "seller3",  region: "region3",  location: "location3",  zip_code: "12345", thumb: "images/thumb.png", created_at: new Date(), phone_number:"0622334455"},
		{id: 4,  name: "produit4",  descr: "Ceci est un produit", category: "cat4",  price: "10", seller: "seller4",  region: "region4",  location: "location4",  zip_code: "12345", thumb: "images/thumb.png", created_at: new Date(), phone_number:"0622334455"},
		{id: 5,  name: "produit5",  descr: "Ceci est un produit", category: "cat5",  price: "10", seller: "seller5",  region: "region5",  location: "location5",  zip_code: "12345", thumb: "images/thumb.png", created_at: new Date(), phone_number:"0622334455"},
		{id: 6,  name: "produit6",  descr: "Ceci est un produit", category: "cat6",  price: "10", seller: "seller6",  region: "region6",  location: "location6",  zip_code: "12345", thumb: "images/thumb.png", created_at: new Date(), phone_number:"0622334455"},
		{id: 7,  name: "produit7",  descr: "Ceci est un produit", category: "cat7",  price: "10", seller: "seller7",  region: "region7",  location: "location7",  zip_code: "12345", thumb: "images/thumb.png", created_at: new Date(), phone_number:"0622334455"},
		{id: 8,  name: "produit8",  descr: "Ceci est un produit", category: "cat8",  price: "10", seller: "seller8",  region: "region8",  location: "location8",  zip_code: "12345", thumb: "images/thumb.png", created_at: new Date(), phone_number:"0622334455"},
		{id: 9,  name: "produit9",  descr: "Ceci est un produit", category: "cat9",  price: "10", seller: "seller9",  region: "region9",  location: "location9",  zip_code: "12345", thumb: "images/thumb.png", created_at: new Date(), phone_number:"0622334455"},
		{id: 10, name: "produit10", descr: "Ceci est un produit", category: "cat10", price: "10", seller: "seller10", region: "region10", location: "location10", zip_code: "12345", thumb: "images/thumb.png", created_at: new Date(), phone_number:"0622334455"}
	];
});

hoMyGodeApp.controller('productController', function($scope){

	$scope.product = {id: 1,  name: "produit1",  descr: "Ceci est un produit", category: "cat1",  price: "10", seller: "seller1",  location: "location1", zip_code: "12345", img: "images/thumb.png", created_at: new Date(), phone_number:"0622334455"};
});

hoMyGodeApp.controller('productMessageController', function($scope){

	$scope.product = {id: 1,  name: "produit1", category: "cat1",  price: "10", seller: "seller1",  location: "location1", zip_code: "12345", img: "images/thumb.png", created_at: new Date(), phone_number:"0622334455"};
});

hoMyGodeApp.controller('productNewController', function($scope){

	$scope.save = function save(product) {
		if (product != undefined 
		    && product.name != undefined
		    && product.category != undefined
		    && product.region != undefined) {
				console.log(product);
		        PostService.create(post).success(function(data) {
		            $location.path("/admin");
		        }).error(function(status, data) {
		            console.log(status);
		            console.log(data);
		});
	}
}});

hoMyGodeApp.controller('productEditController', function($scope){

	$scope.product = {id: 1,  name: "produit1", descr: "Ceci est un produit", category: "cat1",  price: "10", seller: "seller1",  location: "location1", zip_code: "12345", img: "images/thumb.png", created_at: new Date(), phone_number:"0622334455", region: "region1"};


    //     var id = $routeParams.id;

    //     PostService.read(id).success(function(data) {
    //         $scope.post = data;
    //         $('#textareaContent').wysihtml5({"font-styles": false});
    //         $('#textareaContent').val($sce.trustAsHtml(data.content));
    //     }).error(function(status, data) {
    //         $location.path("/admin");
    //     });

    //     $scope.save = function save(post, shouldPublish) {
    //         if (post !== undefined 
    //             && post.title !== undefined && post.title != "") {

    //             var content = $('#textareaContent').val();
    //             if (content !== undefined && content != "") {
    //                 post.content = content;

    //                 if (shouldPublish != undefined && shouldPublish == true) {
    //                     post.is_published = true;
    //                 } else {
    //                     post.is_published = false;
    //                 }

    //                 // string comma separated to array
    //                 if (Object.prototype.toString.call(post.tags) !== '[object Array]') {
    //                     post.tags = post.tags.split(',');
    //                 }
                    
    //                 PostService.update(post).success(function(data) {
    //                     $location.path("/admin");
    //                 }).error(function(status, data) {
    //                     console.log(status);
    //                     console.log(data);
    //                 });
    //             }
    //         }
    //     }
    // }
});



hoMyGodeApp.controller('loginController', function($scope){
	
});
