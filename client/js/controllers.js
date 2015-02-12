regions = [
{ name: "Toute la france", value: "" },
{ name: "Alsace", value: "Alsace" },
{ name: "Aquitaine", value: "Aquitaine" },
{ name: "Auvergne", value: "Auvergne"},
{ name: "Basse-Normandie", value: "Basse-Normandie" },
{ name: "Bourgogne", value: "Bourgogne" },
{ name: "Bretagne", value: "Bretagne" },
{ name: "Centre", value: "Centre" },
{ name: "Champagne-Ardenne", value: "Champagne-Ardenne" },
{ name: "Corse", value: "Corse" },
{ name: "Franche-Comté", value: "Franche-Comté" },
{ name: "Haute-Normandie", value: "Haute-Normandie" },
{ name: "Île-de-France", value: "Île-de-France" },
{ name: "Languedoc-Roussillon", value: "Languedoc-Roussillon" },
{ name: "Limousin", value: "Limousin" },
{ name: "Lorraine", value: "Lorraine" },
{ name: "Midi-Pyrénées", value: "Midi-Pyrénées" },
{ name: "Nord-Pas-de-Calais", value: "Nord-Pas-de-Calais" },
{ name: "Pays de la Loire", value: "Pays de la Loire" },
{ name: "Picardie", value: "Picardie" },
{ name: "Poitou-Charentes", value: "Poitou-Charentes" },
{ name: "Provence-Alpes-Côte d'Azur", value: "Provence-Alpes-Côte d'Azur" },
{ name: "Rhône-Alpes", value: "Rhône-Alpes" }
];

categories = [
{ name: "Toutes les categories", value: "" },
{ name: "Boules de Geïsha", value: "Boules de Geïsha" },
{ name: "Canard Vibrant", value: "Canard Vibrant" },
{ name: "Oeufs Vibrants", value: "Oeufs Vibrants" },
{ name: "Sextoy Rabbit", value: "Sextoy Rabbit" },
{ name: "Coffrets & Accessoires", value: "Coffrets & Accessoires" },
{ name: "Gode Ceinture", value: "Gode Ceinture" },
{ name: "Vibromasseurs", value: "Vibromasseurs" },
{ name: "Poupée Gonflabe", value: "Poupée Gonflabe" },
{ name: "Gode & Plug", value: "Gode & Plug" },

];

appControllers.controller('mainController', function($scope, $route, $routeParams){
	
	$scope.params = $routeParams;

});

appControllers.controller('productsController', ['$scope', '$sce', 'ProductsService',
    function productsController($scope, $sce, ProductsService) {
        $scope.regions = regions;
        $scope.categories = categories;
        $scope.products = [];
        ProductsService.all().success(function(data) {
            $scope.products = data;
        }).error(function(data, status) {
            console.log(status);
            console.log(data);
        });
    }
    ]);

appControllers.controller('productController', ['$scope', '$routeParams', '$location', '$sce', 'ProductsService', 'AuthenticationService',
    function productController($scope, $routeParams, $location, $sce, ProductsService, AuthenticationService) {

        $scope.product = {};
        var id = $routeParams.id;
        ProductsService.get(id).success(function(data) {
            console.log(data);
            $scope.product = data;
            $scope.isAuth = AuthenticationService.isAuthenticated;
        }).error(function(data, status) {
            console.log(status);
            console.log(data);
            $location.path("/products");
        });

        $scope.deleteProduct = function deleteProduct(id) {
            if (id != undefined) {
                ProductsService.delete(id).success(function(data) {
                    $location.path("/products");
                }).error(function(status, data) {
                    console.log(status);
                    console.log(data);
                });
            }
        }
    }
    ]);

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
                    $location.path("/products");
                }).error(function(status, data) {
                    $location.path("/signin");
                    console.log(status);
                    console.log(data);
                });
            }
        }
    }
    ]);

appControllers.controller('productEditController', ['$scope', '$routeParams', '$location', '$sce', 'ProductsService', 'AuthenticationService',
    function productEditController($scope, $routeParams, $location, $sce, ProductsService, AuthenticationService) {

        $scope.product = {};
        var id = $routeParams.id;
        if (!AuthenticationService.isAuthenticated)
            $location.path("/product/"+id);
        $scope.regions = regions;
        $scope.categories = categories;
        ProductsService.get(id).success(function(data) {
            console.log(data);
            $scope.product = data;

        }).error(function(data, status) {
            console.log(status);
            console.log(data);
        });

        $scope.save = function save(product) {
            console.log(product);
            if (product != undefined 
                && product.name != undefined
                && product.category != undefined
                && product.region != undefined) {                  
                ProductsService.update(product).success(function(data) {
                    $location.path("/product/"+product.id);
                }).error(function(status, data) {
                    console.log(status);
                    console.log(data);
                });
            }
        }
    }
    ]);

appControllers.controller('adminUserController', ['$scope', '$location', '$window', 'UserService', 'AuthenticationService',
	function adminUserController($scope, $location, $window, UserService, AuthenticationService){

     $scope.signIn = function signIn (username, password) {
        if (username != null && password != null) {
            UserService.signIn(username, password).success(function(data) {
               console.log(data);
               AuthenticationService.isAuthenticated = true;
               $window.sessionStorage.token = data.token;
               $location.path("/products");
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
    $location.path("/signin");
}
}
}
]);