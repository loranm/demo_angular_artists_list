'use strict',

(function(){
  angular.module('musicApp').controller('editController', ['$scope','$routeParams','$location','artistsFactory', function($scope, $routeParams, $location, artistsFactory){
    $scope.artist = artistsFactory.getArtist($routeParams.id)


    $scope.save = function(id, artist){
      artistsFactory.save(id, artist)
      $location.path('/list');
    }

    $scope.cancel = function(){
      $scope.artist = {};
      $location.path('/list');
    }

  }]);


})();
