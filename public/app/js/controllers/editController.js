'use strict',

(function(){
  angular.module('musicApp').controller('editController', ['$scope','$routeParams','$location','artistsFactory', function($scope, $routeParams, $location, artistsFactory){

    $scope.artist = artistsFactory.artists[$routeParams.id]


    $scope.save = function(id){
      artistsFactory.artists[id] = $scope.artist;
      $location.path('/list');
    }

    $scope.cancel = function(){
      $scope.artist = {};
      $location.path('/list');
    }

  }]);


})();
