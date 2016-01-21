var app=angular.module('LetsAngular', []);
app.controller('calculator',['$scope', function($scope){
	$scope.result="";

	$scope.add=function(){
		$scope.result=+$scope.num1 + +$scope.num2;
	}
	$scope.sub=function(){
		$scope.result=$scope.num1-$scope.num2;
	}
	$scope.mul=function(){
		$scope.result=$scope.num1*$scope.num2;
	}
	$scope.divide=function(){
		$scope.result=$scope.num1/$scope.num2;
	}
}]);