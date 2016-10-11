(function(){
  "use strict";
  angular.module('musicApp', ['ngRoute', 'ngResource']);

  angular.module('musicApp').run(['$rootScope', '$templateCache', function($rootScope, $templateCache) {
   $rootScope.$on('$viewContentLoaded', function() {
      $templateCache.removeAll();
   });
}]);

})();
