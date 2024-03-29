'use strict'

var app = angular.module('app', ['ngRoute', 'appControllers', 'appServices', 'appDirectives']);

var appServices = angular.module('appServices', []);
var appControllers = angular.module('appControllers', []);
var appDirectives = angular.module('appDirectives', []);

var options = {};
options.api = {};
options.api.base_url = "http://localhost:3001";

///Routes

app.config(['$locationProvider', '$routeProvider'],
	function($location, $routeProvider) {
	
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
			controller: 'adminUserController'
		})
		
		//register

		.when('/register', {
			templateUrl: 'pages/register.html',
			controller: 'adminUserController'
		})

		.otherwise({redirectTo:'/'})

		;
});

app.config(function ($httpProvider) {
    $httpProvider.interceptors.push('TokenInterceptor');
});

app.run(function($rootScope, $location, $window, AuthenticationService) {
    $rootScope.$on("$routeChangeStart", function(event, nextRoute, currentRoute) {
        //redirect only if both isAuthenticated is false and no token is set
        if (nextRoute != null && nextRoute.access != null && nextRoute.access.requiredAuthentication 
            && !AuthenticationService.isAuthenticated && !$window.sessionStorage.token) {

            $location.path("/login");
        }
    });
});




//////////
////////// Controllers
/////////



products = [
		{id: 1,  name: "produit1",  descr: "Ceci est un produit", category: "category 1",  price: "10", seller: "seller1",  region: "Auvergne", location: "location1",  zip_code: "12345", img1: "images/thumb.png", img2: "images/thumb.png", img3: "images/thumb.png", created_at: new Date(), phone_number:"0622334455"},
		{id: 2,  name: "produit2",  descr: "Ceci est un produit", category: "category 2",  price: "10", seller: "seller2",  region: "Auvergne", location: "location2",  zip_code: "12345", img1: "images/thumb.png", img2: "images/thumb.png", img3: "images/thumb.png", created_at: new Date(), phone_number:"0622334455"},
		{id: 3,  name: "produit3",  descr: "Ceci est un produit", category: "category 3",  price: "10", seller: "seller3",  region: "Auvergne", location: "location3",  zip_code: "12345", img1: "images/thumb.png", img2: "images/thumb.png", img3: "images/thumb.png", created_at: new Date(), phone_number:"0622334455"},
		{id: 4,  name: "produit4",  descr: "Ceci est un produit", category: "category 4",  price: "10", seller: "seller4",  region: "Auvergne", location: "location4",  zip_code: "12345", img1: "images/thumb.png", img2: "images/thumb.png", img3: "images/thumb.png", created_at: new Date(), phone_number:"0622334455"},
		{id: 5,  name: "produit5",  descr: "Ceci est un produit", category: "category 5",  price: "10", seller: "seller5",  region: "Auvergne", location: "location5",  zip_code: "12345", img1: "images/thumb.png", img2: "images/thumb.png", img3: "images/thumb.png", created_at: new Date(), phone_number:"0622334455"},
		{id: 6,  name: "produit6",  descr: "Ceci est un produit", category: "category 6",  price: "10", seller: "seller6",  region: "Auvergne", location: "location6",  zip_code: "12345", img1: "images/thumb.png", img2: "images/thumb.png", img3: "images/thumb.png", created_at: new Date(), phone_number:"0622334455"},
		{id: 7,  name: "produit7",  descr: "Ceci est un produit", category: "category 7",  price: "10", seller: "seller7",  region: "Auvergne", location: "location7",  zip_code: "12345", img1: "images/thumb.png", img2: "images/thumb.png", img3: "images/thumb.png", created_at: new Date(), phone_number:"0622334455"},
		{id: 8,  name: "produit8",  descr: "Ceci est un produit", category: "category 8",  price: "10", seller: "seller8",  region: "Auvergne", location: "location8",  zip_code: "12345", img1: "images/thumb.png", img2: "images/thumb.png", img3: "images/thumb.png", created_at: new Date(), phone_number:"0622334455"},
		{id: 9,  name: "produit9",  descr: "Ceci est un produit", category: "category 9",  price: "10", seller: "seller9",  region: "Auvergne", location: "location9",  zip_code: "12345", img1: "images/thumb.png", img2: "images/thumb.png", img3: "images/thumb.png", created_at: new Date(), phone_number:"0622334455"},
		{id: 10, name: "produit10", descr: "Ceci est un produit", category: "category 10", price: "10", seller: "seller10", region: "Auvergne", location: "location10", zip_code: "12345", img1: "images/thumb.png", img2: "images/thumb.png", img3: "images/thumb.png", created_at: new Date(), phone_number:"0622334455"}
	];

// products = [
// 		{id: 1,  name: "Boules de Geïsha",  descr: "Ceci est un Boules de Geïsha", category: "Boules de Geïsha", price: "30", seller: "seller1",  region: "Auvergne", location: "location1",  zip_code: "12345", img1: "images/thumb.png", img2: "images/thumb.png", img3: "images/thumb.png", created_at: new Date(), phone_number:"0622334455"},
// 		{id: 2,  name: "Canard Vibrant",  descr: "Ceci est un Canard Vibrant", category: "Canard Vibrant", price: "59,99", seller: "seller2",  region: "Aquitaine", location: "location2",  zip_code: "12345", img1: "images/thumb.png", img2: "images/thumb.png", img3: "images/thumb.png", created_at: new Date(), phone_number:"0622334455"},
// 		{id: 3,  name: "Oeufs Vibrants",  descr: "Ceci est un Oeufs Vibrants", category: "Oeufs Vibrants", price: "28", seller: "seller3",  region: "Alsace", location: "location3",  zip_code: "12345", img1: "images/thumb.png", img2: "images/thumb.png", img3: "images/thumb.png", created_at: new Date(), phone_number:"0622334455"},
// 		{id: 4,  name: "Sextoy Rabbit",  descr: "Ceci est un Sextoy Rabbit", category: "Sextoy Rabbit", price: "59", seller: "seller4",  region: "Bourgogne", location: "location4",  zip_code: "12345", img1: "images/thumb.png", img2: "images/thumb.png", img3: "images/thumb.png", created_at: new Date(), phone_number:"0622334455"},
// 		{id: 5,  name: "Coffrets & Accessoires",  descr: "Ceci est un Coffrets & Accessoires", category: "Coffrets & Accessoires", price: "10.00", seller: "seller5",  region: "Bretagne", location: "location5",  zip_code: "12345", img1: "images/thumb.png", img2: "images/thumb.png", img3: "images/thumb.png", created_at: new Date(), phone_number:"0622334455"},
// 		{id: 6,  name: "Gode & Godemichet",  descr: "Ceci est un Gode & Godemichet", category: "Gode & Godemichet", price: "130", seller: "seller6",  region: "Centre", location: "location6",  zip_code: "12345", img1: "images/thumb.png", img2: "images/thumb.png", img3: "images/thumb.png", created_at: new Date(), phone_number:"0622334455"},
// 		{id: 7,  name: "Gode Ceinture",  descr: "Ceci est un Gode Ceinture", category: "Gode Ceinture", price: "25", seller: "seller7",  region: "Corse", location: "location7",  zip_code: "12345", img1: "images/thumb.png", img2: "images/thumb.png", img3: "images/thumb.png", created_at: new Date(), phone_number:"0622334455"},
// 		{id: 8,  name: "Sextoys Anal",  descr: "Ceci est un Sextoys Anal", category: "Sextoys Anal", price: "12", seller: "seller8",  region: "Limousin", location: "location8",  zip_code: "12345", img1: "images/thumb.png", img2: "images/thumb.png", img3: "images/thumb.png", created_at: new Date(), phone_number:"0622334455"},
// 		{id: 9,  name: "Vibromasseurs",  descr: "Ceci est un Vibromasseurs", category: "Vibromasseurs", price: "8", seller: "seller9",  region: "Lorraine", location: "location9",  zip_code: "12345", img1: "images/thumb.png", img2: "images/thumb.png", img3: "images/thumb.png", created_at: new Date(), phone_number:"0622334455"},
// 		{id: 10, name: "Poupée Gonflabe", descr: "Ceci est une Poupée Gonflabe", category: "Poupée Gonflabe", price: "1200", seller: "seller10", region: "Picardie", location: "location10", zip_code: "12345", img1: "images/thumb.png", img2: "images/thumb.png", img3: "images/thumb.png", created_at: new Date(), phone_number:"0622334455"}
// 	];


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

app.controller('mainController', function($scope, $route, $routeParams){
	
	$scope.params = $routeParams;

});

app.controller('productsController', function($scope){

	$scope.products = products;
	$scope.regions = regions;
	$scope.categories = categories;
});

app.controller('productController', function($scope, $routeParams){
	
	var id = $routeParams.id;
	$scope.product = products[id-1];
});

app.controller('productMessageController', function($scope, $routeParams){

	var id = $routeParams.id;
	$scope.product = products[id-1];
});

app.controller('productNewController', function($scope){

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

app.controller('productEditController', function($scope, $routeParams){

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


app.controller('adminUserController', ['$scope', '$location', '$window', 'UserService', 'AuthenticationService'],
	function($scope, $location, $window, UserService, AuthenticationService){
	console.log("adminUserController");
	$scope.register = function register (username, email, password, passwordConfirm){
		if (false){
			console.log("already connected");
		}
		else {
			UserService.register(username, email, password, passwordConfirm)
			.success(function(){
				console.log("success");
			})
			.error(function(status, data){
				console.log("error");
				console.log(status);
				console.log(data);
			})
		}
	}
});




//////////
////////// Services
admin/////////



appServices.factory('AuthenticationService', function() {
    var auth = {
        isAuthenticated: false,
        isAdmin: false
    }

    return auth;
});

appServices.factory('TokenInterceptor', function ($q, $window, $location, AuthenticationService) {
    return {
        request: function (config) {
            config.headers = config.headers || {};
            if ($window.sessionStorage.token) {
                config.headers.Authorization = 'Bearer ' + $window.sessionStorage.token;
            }
            return config;
        },

        requestError: function(rejection) {
            return $q.reject(rejection);
        },

        /* Set Authentication.isAuthenticated to true if 200 received */
        response: function (response) {
            if (response != null && response.status == 200 && $window.sessionStorage.token && !AuthenticationService.isAuthenticated) {
                AuthenticationService.isAuthenticated = true;
            }
            return response || $q.when(response);
        },

        /* Revoke client authentication if 401 is received */
        responseError: function(rejection) {
            if (rejection != null && rejection.status === 401 && ($window.sessionStorage.token || AuthenticationService.isAuthenticated)) {
                delete $window.sessionStorage.token;
                AuthenticationService.isAuthenticated = false;
                $location.path("/admin/login");
            }

            return $q.reject(rejection);
        }
    };
});

appServices.factory('PostService', function($http) {
    return {
        findAllPublished: function() {
            return $http.get(options.api.base_url + '/post');
        },

        findByTag: function(tag) {
            return $http.get(options.api.base_url + '/tag/' + tag);
        },

        read: function(id) {
            return $http.get(options.api.base_url + '/post/' + id);
        },
        
        findAll: function() {
            return $http.get(options.api.base_url + '/post/all');
        },

        changePublishState: function(id, newPublishState) {
            return $http.put(options.api.base_url + '/post', {'post': {_id: id, is_published: newPublishState}});
        },

        delete: function(id) {
            return $http.delete(options.api.base_url + '/post/' + id);
        },

        create: function(post) {
            return $http.post(options.api.base_url + '/post', {'post': post});
        },

        update: function(post) {
            return $http.put(options.api.base_url + '/post', {'post': post});
        },

        like: function(id) {
            return $http.post(options.api.base_url  + '/post/like', {'id': id});
        },

        unlike: function(id) {
            return $http.post(options.api.base_url  + '/post/unlike', {'id': id}); 
        }
    };
});

appServices.factory('UserService', function ($http) {
    return {
        signIn: function(username, password) {
            return $http.post(options.api.base_url + '/user/signin', {username: username, password: password});
        },

        logOut: function() {
            return $http.get(options.api.base_url + '/user/logout');
        },

        register: function(username, password, passwordConfirmation) {
            return $http.post(options.api.base_url + '/user/register', {username: username, password: password, passwordConfirmation: passwordConfirmation });
        }
    }
});
