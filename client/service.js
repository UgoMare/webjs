hoMyGodeApp.factory('AuthenticationService', function(){
	var auth = {
		isAuthenticated: false
	}

	return auth;
});

hoMyGodeApp.factory('UserService', function($http){
	return : {
		signUp: function(username, email, password, passwordConfirm){
			return $http.post(options.api.base_url + '/user/r', {username: username, email: email password: password, passwordConfirmation: passwordConfirmation });
		}
	}
});