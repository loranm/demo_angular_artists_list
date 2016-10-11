(function(){
  "use strict";
  angular.module('musicApp').directive('ngGenre',[function(){

    return {
      restrict: 'A',
      scope: {
        values: "=",
        selected: "="
      },
      templateUrl: './partials/genreTemplate.html'
    };
  }]);



})();
