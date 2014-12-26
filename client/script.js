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

		//login

		.when('/login', {
			templateUrl: 'pages/login.html',
			controller: 'loginController'
		})
		
		.otherwise({redirectTo:'/'})

		;
});

products = [
		{id: 1,  name: "produit1",  descr: "Ceci est un produit", category: "Canard Vibrant", price: "10", seller: "seller1",  region: "Auvergne", location: "location1",  zip_code: "12345", img1: "images/thumb.png", img2: "images/thumb.png", img3: "images/thumb.png", created_at: new Date(), phone_number:"0622334455"},
		{id: 2,  name: "produit2",  descr: "Ceci est un produit", category: "Canard Vibrant", price: "10", seller: "seller2",  region: "Auvergne", location: "location2",  zip_code: "12345", img1: "images/thumb.png", img2: "images/thumb.png", img3: "images/thumb.png", created_at: new Date(), phone_number:"0622334455"},
		{id: 3,  name: "produit3",  descr: "Ceci est un produit", category: "Canard Vibrant", price: "10", seller: "seller3",  region: "Auvergne", location: "location3",  zip_code: "12345", img1: "images/thumb.png", img2: "images/thumb.png", img3: "images/thumb.png", created_at: new Date(), phone_number:"0622334455"},
		{id: 4,  name: "produit4",  descr: "Ceci est un produit", category: "Canard Vibrant", price: "10", seller: "seller4",  region: "Auvergne", location: "location4",  zip_code: "12345", img1: "images/thumb.png", img2: "images/thumb.png", img3: "images/thumb.png", created_at: new Date(), phone_number:"0622334455"},
		{id: 5,  name: "produit5",  descr: "Ceci est un produit", category: "Canard Vibrant", price: "10", seller: "seller5",  region: "Auvergne", location: "location5",  zip_code: "12345", img1: "images/thumb.png", img2: "images/thumb.png", img3: "images/thumb.png", created_at: new Date(), phone_number:"0622334455"},
		{id: 6,  name: "produit6",  descr: "Ceci est un produit", category: "Canard Vibrant", price: "10", seller: "seller6",  region: "Auvergne", location: "location6",  zip_code: "12345", img1: "images/thumb.png", img2: "images/thumb.png", img3: "images/thumb.png", created_at: new Date(), phone_number:"0622334455"},
		{id: 7,  name: "produit7",  descr: "Ceci est un produit", category: "Canard Vibrant", price: "10", seller: "seller7",  region: "Auvergne", location: "location7",  zip_code: "12345", img1: "images/thumb.png", img2: "images/thumb.png", img3: "images/thumb.png", created_at: new Date(), phone_number:"0622334455"},
		{id: 8,  name: "produit8",  descr: "Ceci est un produit", category: "Canard Vibrant", price: "10", seller: "seller8",  region: "Auvergne", location: "location8",  zip_code: "12345", img1: "images/thumb.png", img2: "images/thumb.png", img3: "images/thumb.png", created_at: new Date(), phone_number:"0622334455"},
		{id: 9,  name: "produit9",  descr: "Ceci est un produit", category: "Canard Vibrant", price: "10", seller: "seller9",  region: "Auvergne", location: "location9",  zip_code: "12345", img1: "images/thumb.png", img2: "images/thumb.png", img3: "images/thumb.png", created_at: new Date(), phone_number:"0622334455"},
		{id: 10, name: "produit10", descr: "Ceci est un produit", category: "Canard Vibrant", price: "10", seller: "seller10", region: "Auvergne", location: "location10", zip_code: "12345", img1: "images/thumb.png", img2: "images/thumb.png", img3: "images/thumb.png", created_at: new Date(), phone_number:"0622334455"}
	];

regions = [
{ name: "Alsace" },
{ name: "Aquitaine" },
{ name: "Auvergne" },
{ name: "Basse-Normandie" },
{ name: "Bourgogne" },
{ name: "Bretagne" },
{ name: "Centre" },
{ name: "Champagne-Ardenne" },
{ name: "Corse" },
{ name: "Franche-Comté" },
{ name: "Haute-Normandie" },
{ name: "Île-de-France" },
{ name: "Languedoc-Roussillon" },
{ name: "Limousin" },
{ name: "Lorraine" },
{ name: "Midi-Pyrénées" },
{ name: "Nord-Pas-de-Calais" },
{ name: "Pays de la Loire" },
{ name: "Picardie" },
{ name: "Poitou-Charentes" },
{ name: "Provence-Alpes-Côte d'Azur" },
{ name: "Rhône-Alpes"}
];

categories = [
{ name: "Boules de Geïsha" },
{ name: "Canard Vibrant" },
{ name: "Oeufs Vibrants" },
{ name: "Sextoy Rabbit" },
{ name: "Coffrets & Accessoires" },
{ name: "Gode & Godemichet" },
{ name: "Gode Ceinture" },
{ name: "Machine de l'Amour" },
{ name: "Sextoys Anal" },
{ name: "Stimulateurs Clitoridiens" },
{ name: "Vibromasseurs" },
{ name: "Masturbateur Homme" },
{ name: "Poupée Gonflabe" },
{ name: "Stimulateur Prostatique" },
{ name: "Anneaux & Gaines de Pénis" },
{ name: "Gode & Plug" },
{ name: "Gode Ceinture Homme" }
];

hoMyGodeApp.controller('mainController', function($scope, $route, $routeParams){
	
	$scope.params = $routeParams;

});

hoMyGodeApp.controller('productsController', function($scope){

	$scope.products = products;
	$scope.regions = regions;
	$scope.categories = categories;
});

hoMyGodeApp.controller('productController', function($scope, $routeParams){
	
	var id = $routeParams.id;
	$scope.product = products[id-1];
});

hoMyGodeApp.controller('productMessageController', function($scope, $routeParams){

	var id = $routeParams.id;
	$scope.product = products[id-1];
});

hoMyGodeApp.controller('productNewController', function($scope){

$scope.uploadFile = function(files) {
    var fd = new FormData();
 
    fd.append("file", files[0]);

    // $http.post("uploadUrl", fd, {
    //     withCredentials: true,
    //     headers: {'Content-Type': undefined },
    //     transformRequest: angular.identity
    // }).success( ...all right!... ).error( ..damn!... );	

};


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

hoMyGodeApp.controller('productEditController', function($scope, $routeParams){

	var id = $routeParams.id;
	$scope.product = products[id-1];
	$scope.regions = regions;
	$scope.categories = categories;


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
