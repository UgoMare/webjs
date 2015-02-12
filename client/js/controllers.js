
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

appControllers.controller('mainController', function($scope, $route, $routeParams){
	
	$scope.params = $routeParams;

});

// appControllers.controller('productsController', function($scope){

// 	$scope.products = products;

// });


appControllers.controller('productsController', ['$scope', '$sce', 'ProductsService',
    function productsController($scope, $sce, ProductsService) {
        $scope.regions = regions;
        $scope.categories = categories;
        $scope.products = [];
        console.log("in");
        ProductsService.allProducts().success(function(data) {
                console.log(data);
            // for (var postKey in data) {
            //     data[postKey].content = $sce.trustAsHtml(data[postKey].content);
            // }

            // $scope.posts = data;
            $scope.products = data;
            $scope.products = products;
        }).error(function(data, status) {
            console.log(status);
            console.log(data);
        });
    }
]);

appControllers.controller('productController', function($scope, $routeParams){
	
	var id = $routeParams.id;
	$scope.product = products[id-1];
});

appControllers.controller('productMessageController', function($scope, $routeParams){

	var id = $routeParams.id;
	$scope.product = products[id-1];
});

appControllers.controller('productNewController', ['$scope', '$location', 'ProductsService',
    function productNewController($scope, $location, ProductsService) {
        $scope.regions = regions;
        $scope.categories = categories;
        
        $scope.save = function save(product) {
            if (product != undefined 
                && product.name != undefined
                && product.category != undefined
                && product.region != undefined) {
                    ProductsService.create(product).success(function(data) {
                        console.log(data);
                        // $location.path("/admin");
                    }).error(function(status, data) {
                        console.log(status);
                        console.log(data);
                    });
            }
        }
    }
]);

appControllers.controller('productEditController', function($scope, $routeParams){

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


appControllers.controller('adminUserController', ['$scope', '$location', '$window', 'UserService', 'AuthenticationService',
	function adminUserController($scope, $location, $window, UserService, AuthenticationService){

       $scope.signIn = function signIn (username, password) {
            if (username != null && password != null) {
                UserService.signIn(username, password).success(function(data) {
                	console.log(data);
                    AuthenticationService.isAuthenticated = true;
                    $window.sessionStorage.token = data.token;
                    $location.path("/");
                })
                .error(function(status, data) {
                    console.log(status);
                    console.log(data);
                });
            }
        }

		$scope.register = function register (username, email, phone, password, passwordConfirm){
			console.log(username);
			if (false){
				console.log("already connected");
			}
			else {
				UserService.register(username, email, phone, password, passwordConfirm)
				.success(function(){
					$location.path("/signin");
				})
				.error(function(status, data){
					console.log("error");
					console.log(status);
					console.log(data);
				})
			}
		}

		$scope.logOut = function logOut() {

            if (AuthenticationService.isAuthenticated) {    
            	console.log("logout");
                UserService.logOut().success(function(data) {
                	console.log("logout");
                    AuthenticationService.isAuthenticated = false;
                    delete $window.sessionStorage.token;
                    $location.path("/");
                }).error(function(status, data) {
                    console.log(status);
                    console.log(data);
                });
            }
            else {
                $location.path("/admin/login");
            }
        }
	}
]);