(function() {
  'use strict';
  angular.module('musicApp').controller('addController', ['$scope', '$location', 'artistsFactory', function($scope, $location, artistsFactory) {
    $scope.artist = {};

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
