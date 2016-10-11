(function() {
  "use strict";
  angular.module('musicApp').factory('artistsFactory',['$resource', function($resource) {

    var msg = {};
    var service = {};
    var data = $resource('http://localhost:8080/apiRoutes/:id', null,{
      'update': {method: 'PUT', params: {id: '@id'}}
    });
    var grades = [1,2,3,4,5];
    var genres = ['Rock','Alternatif','Grunge', 'Rap', 'Jazz', 'Lounge'];

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


    service.getGrades = function(){
      return grades;
    };
    service.getGenres = function(){
      return genres;
    };


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

    service.save = function(option) {
      data.update({ id: option._id }, option, function(result){
          msg.msgnod = result.msg;
      });
    };

    return service;

  }]);
})();
