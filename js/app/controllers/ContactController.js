function ContactController($scope, $timeout) {
	$scope.name = 'Laura';
  $timeout(function () {
    $scope.name = "Shapz"
  }, 5000);

}

angular
	.module('app')
	.controller('ContactController', ContactController);