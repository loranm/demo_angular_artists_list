var express = require('express');

router = express.Router();

var User = require('../api/models/user.js');

router.route('/')
    .get(function(req, res) {

        User.find(function(err, data) {
            res.json(data);
        });

    })
    .post(function(req, res) {
        //création du json à sauvegarder à partir des infos du formulaire envoyé en post
        var newArtist = new User({
            name: req.body.name,
            genre: req.body.genre,
            rating: req.body.rating
        });

        //sauvegarde dans mongodb
        newArtist.save(function(err) {
            if (err) throw err;
            res.json({
                msg: "Nouvel artist enregistré"
            });
        });
    });


//Find one artist
router.route('/:id')
    .get(function(req, res) {
        User.findById(req.params.id, function(err, artist) {
            if (err) throw err;
            res.json(artist);
        });
    })
    .delete(function(req, res) {
        User.remove({
            _id: req.params.id
        }, function(err) {
            if (err) throw err;
            res.json({
                msg: "Artiste supprimé"
            });
        });
    })
    .put(function(req, res) {
        User.findById(req.params.id, function(err, user) {
            if (err) throw err;
            user.name = req.body.name;
            user.genre = req.body.genre;
            user.rating = req.body.rating;

            user.save(function(err) {
                if (err) throw err;
                res.json({
                    msg: 'utilisateur mis à jour'
                });
            });
        });
    });



module.exports = router;
