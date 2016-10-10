(function() {
    'use strict',
    angular.module('musicApp').controller('editController', ['$scope', '$routeParams', '$location', 'artistsFactory', function($scope, $routeParams, $location, artistsFactory) {
        $scope.artist = artistsFactory.getArtist($routeParams.id);

        $scope.grades = [1,2,3,4,5];

        $scope.save = function(artist) {
          artistsFactory.save(artist);
          $location.path('/list');
        };

        $scope.cancel = function() {
            $scope.artist = {};
            $location.path('/list');
        };
    }]);
})();
