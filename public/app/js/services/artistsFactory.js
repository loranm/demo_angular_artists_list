(function() {
  "use strict";
  angular.module('musicApp').factory('artistsFactory',['$resource', function($resource) {

    var service = {};
    var data = $resource('http://localhost:8080/apiRoutes/:id');

    //configure le requête envoyée au serveur
    service.get = function() {
      return data.query();
    };

    /*exemple
    service.get = function() {
    return data.query({page: 2});
    };
    requête la page http://localhost:8080/apiRoutes?page=2
    */


    service.getArtist = function(option){
      return data.get({id: option});
    };

    service.add = function(artist) {
      if (artist.name) {
        data.save(null, artist, function(){
          console.log(artist + 'enregistré');
        });
      }
    };

    service.save = function(id, artist) {
      data.artists[id] = artist;
    };

    return service;

  }]);
})();
