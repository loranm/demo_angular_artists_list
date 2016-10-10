(function() {
    angular.module('musicApp').controller('ratingController', ['$scope', '$resource', function($scope, $resource) {
        $scope.default = {label: 1};
        $scope.grades = [{
            label: 1
        }, {
            label: 2
        }, {
            label: 3
        },{
          label: 4
        },{
          label: 5
        }];
        $scope.title = "Rating: ";
    }]);



})()
