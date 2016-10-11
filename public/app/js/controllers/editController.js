(function() {
    'use strict',
    angular.module('musicApp').controller('editController', ['$scope', '$routeParams', '$location', 'artistsFactory', function($scope, $routeParams, $location, artistsFactory) {
        $scope.artist = artistsFactory.getArtist($routeParams.id);
        $scope.grades = artistsFactory.getGrades();
        $scope.genres = artistsFactory.getGenres();

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
