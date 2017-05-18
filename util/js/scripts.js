var app = angular.module("tApp", []);

app.controller("con", function ($scope, $http) {
	$scope.class = false;
	$scope.order = '';
	$http({
		method: 'GET',
		url: 'https://api.diligeiro.com.br/v2/diligencias/public?format=json'
	}).then(function successCallback(response) {
		$scope.data = response.data.results;
		console.log($scope.data);
	}, function errorCallback(response) {
		console.log(response);
	});
});