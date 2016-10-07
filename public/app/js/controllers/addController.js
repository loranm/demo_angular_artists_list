'use strict',

(function(){
  angular.module('musicApp').controller('addController', ['$scope','$location','artistsFactory', function($scope, $location, artistsFactory){
    $scope.artist = {};

    $scope.add = function(){
      artistsFactory.artists.push($scope.artist);
      $scope.artist = {};
      $location.path('/list');
    };


    $scope.cancel = function(){
      $scope.artist = {};
      $location.path('/list');
    };


  }])
})();
