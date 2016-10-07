'use strict';

(function(){
  angular.module('musicApp').controller('listController', ['$scope','$location','artistsFactory', function($scope, $location, artistsFactory) {

    $scope.artists = artistsFactory.artists;

    $scope.add = function(){
      $location.path('/add')
    }


    $scope.edit = function(id){
      $location.path('/edit/' + id)
    }
  }])
})();
