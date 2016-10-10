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
    });


module.exports = router;
