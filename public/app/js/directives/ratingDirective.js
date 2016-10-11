(function(){
  "use strict";

  angular.module('musicApp').directive('ngRating',[function(){
    return {
      restrict: 'A',
      scope: {
        values: "=",
        selected: "="
      },
      templateUrl: './partials/selectTemplate.html'

    };
  }]);

})();
