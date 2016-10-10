(function() {
  'use strict';
  angular.module('musicApp').controller('addController', ['$scope', '$location', 'artistsFactory', function($scope, $location, artistsFactory) {
    $scope.artist = {};
    $scope.grades = [1,2,3,4,5];

    $scope.add = function() {
      artistsFactory.add($scope.artist);
      $location.path('/list');
    };

    $scope.cancel = function() {
      $scope.artist = {};
      $location.path('/list');
    };
  }]);
})();
