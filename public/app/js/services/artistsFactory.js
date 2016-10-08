(function() {
    "use strict";

    angular.module('musicApp').factory('artistsFactory', function() {
        var service = {};
        var data = {
            artists: [{
                name: 'Group Love',
                genre: 'Alternative',
                rating: '4'
            }, {
                name: 'Beatles',
                genre: 'Rock',
                rating: '5'
            }, {
                name: 'Nirvana',
                genre: 'Grunge',
                rating: '3'
            }]


        };

        service.get = function() {
            return data.artists;
        };

        service.add = function(artist) {
            if (artist.name) {
                data.artists.push(artist);
            }
        };

        service.save = function(id, artist) {
            data.artists[id] = artist;
        };

        return service;

    });



})();
