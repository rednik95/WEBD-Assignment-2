var app  = angular.module("myApp", []);
app.controller("myCtrl" , function($scope, $http){
  //Get info from mongoDB
  $http.get("http://localhost:8080/data/").then(function (response) {
    console.log(response.data)
    $scope.name = response.data.name;
	$scope.aboutme = response.data.aboutme;
    $scope.contacts = {email: response.data.email, phone: response.data.phonenumber}
	$scope.news = {
		title: response.data.newstitle, 
		date:response.data.newsdate, 
		url:response.data.newsURL, 
		des:response.data.newsdes};
	
  });
	
	//Ordering Function
	$scope.orderByMe = function(z){
	$scope.myOrderBy = z;
	};
});
