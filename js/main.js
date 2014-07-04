var TypeShift = angular.module('TypeShift', []);

TypeShift.controller('MainController', ['$scope', function($scope){
	$scope.options = {
		type: "select",
		name: "px",
		value: "px",
		values: ["px", "pt", "ems", "%"]
	}
	
	$scope.units = ["px", "pts", "ems", "%"];
	
	$scope.calculate = function(value){
			if ($("option:selected").text() == "px"){
				switch(value){
					case "px":
						return $scope.input;
						break;
					case "pts":
				 		return ($scope.input / 1.3333);
						break;
					case "ems":
						return ($scope.input / 16);
						break;
					case "%":
						return ($scope.input / 16 * 100);
						break;
				}
			}else
			if  ($("option:selected").text() == "pt"){
				switch(value){
					case "px":
						return ($scope.input * 1.3333);
						break;
					case "pts":
				 		return $scope.input;
						break;
					case "ems":
						return ($scope.input / 12);
						break;
					case "%":
						return ($scope.input / 12 * 100);
						break;
				}
			}else
			if ($("option:selected").text() == "ems"){
				switch(value){
					case "px":
						return ($scope.input * 16);
						break;
					case "pts":
				 		return ($scope.input  * 12);
						break;
					case "ems":
						return $scope.input;
						break;
					case "%":
						return ($scope.input  * 100);
						break;
				}
			}else
			if ($("option:selected").text() == "%"){
				switch(value){
					case "px":
						return ($scope.input * 16 / 100);
						break;
					case "pts":
				 		return ($scope.input  * 12 / 100);
						break;
					case "ems":
						return ($scope.input / 100);
						break;
					case "%":
						return $scope.input;
						break;
				}
			}
	}
}]);