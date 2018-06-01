'use strict';

const mongoose = require('mongoose');
const Title = mongoose.model('Title');


exports.list = function (req, res) {
    Title.find().exec((err, titles) => {
        if(err) {
            return res.status(400).send({message: err.message});
        } else {
            return res.json(titles);
        }
    });
}
