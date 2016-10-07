'use strict';

(function() {

    angular.module('musicApp').factory('artistsFactory', function() {
        return {
            artists: [{
                name: 'Group Love',
                genre: 'Alternative',
                rating: 4
            }, {
                name: 'Beatles',
                genre: 'Rock',
                rating: 5
            }, {
                name: 'Nirvana',
                genre: 'Grunge',
                rating: 3
            }]


        }

    });



})();
