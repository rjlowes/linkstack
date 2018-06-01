'use strict';

const mongoose = require('mongoose');
const Folder = mongoose.model('Folder');

exports.list = (req, res) => {
    console.log("Folder list");
    Folder.find().then(folders => {
        // console.log()
        res.json(folders);
    })
    .catch(err => res.json(err));
};

exports.create = (req, res) => {
    const folder = new Folder(req.body);

    folder.save(err => {
        if(err) {
            return res.status(400).send({message: err.message, errors: err.errors});
        }

        res.json(folder);
    });
};


/**
 * Folder middleware
 */
exports.folderById = function (req, res, next, id) {
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).send({message: 'Folder id is invalid'});
    }

    Folder.findById(id).then(folder => {
        if(!folder) {
            return res.status(404).send({message: `No folder found for id ${id}`});
        }

        req.folder = folder;
        next();
    })
    .catch(err => {
        return next(err);
    });
};

/**
 * Article middleware
 */
// exports.articleByID = function (req, res, next, id) {
//
//   if (!mongoose.Types.ObjectId.isValid(id)) {
//     return res.status(400).send({
//       message: 'Article is invalid'
//     });
//   }
//
//   Article.findById(id).populate('user', 'displayName').exec(function (err, article) {
//     if (err) {
//       return next(err);
//     } else if (!article) {
//       return res.status(404).send({
//         message: 'No article with that identifier has been found'
//       });
//     }
//     req.article = article;
//     next();
//   });
// };
