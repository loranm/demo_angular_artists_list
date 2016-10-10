(function(){
  "use strict";

  angular.module('musicApp').directive('rating', function() {
      return {
        template: '<select ng-model="selectedValue" ng-options="c.name for c in countries"></select>',
        restrict: 'A',
        scope: {
           selectedValue: '='
        },
        link:function(scope,elem,attrs){
           scope.countries = [
        {name:'Vereinigte Arabische Emirate', value:'AE'},
       {name:'Andorra', value:'AD'},
  ];
  scope.selectedValue=scope.countries[1];
        }
      };
});

})();
