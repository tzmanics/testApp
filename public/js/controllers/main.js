angular.module('todoController', [])

// inject the Todo service factory into our controller
.controller('mainController', ['$scope','$http','Todos', function($scope, $http, Todos) {
	$scope.formData = {};
	$scope.loading = true;

	// GET 
	Todos.get()
		.success(function(data) {
			$scope.todos = data;
			$scope.loading = false;
		});

	// CREATE 
	$scope.createTodo = function() {
		$scope.loading = true;

		if ($scope.formData.text != undefined) {

			Todos.create($scope.formData)

				.success(function(data) {
					$scope.loading = false;
					$scope.formData = {};
					$scope.todos = data;
				});
		}
	};

	// DELETE 
	$scope.deleteTodo = function(id) {
		$scope.loading = true;

		Todos.delete(id)
			.success(function(data) {
				$scope.loading = false;
				$scope.todos = data;
			});
	};
}]);