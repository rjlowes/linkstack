'use strict';

const requestPromise = require('request-promise');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const mongoose = require('mongoose');
const Bookmark = mongoose.model('Bookmark');

const Pageres = require('pageres');

exports.list = function (req, res) {
    Bookmark.find()
        .then(links => res.json(links))
        .catch(err => res.json(err));
};

exports.create = function (req, res) {
    const bookmark = new Bookmark(req.body);
    bookmark.folder = req.params.folderId;

    bookmark.save()
        .then(() => res.json(bookmark))
        .catch(err => res.status(400).send({message: err.message, errors: err.errors}));

    // const pageres = new Pageres({delay: 2})
    //     .src(url, ['1280x1024'], {crop: true})
    //     .dest(__dirname + '../../../../../../public/screenies')
    //     .run()
    //     .then((data) => {
    //         // console.log(data);
    //         // console.log('------');
    //         // console.log(data[0].filename);
    //         bookmark.url = req.body.url;
    //         bookmark.image = data[0].filename;
    //         bookmark.save(err => {
    //             if(err) {
    //                 return res.status(400).send({message: err.message, errors: err.errors});
    //             }
    //             res.json(bookmark);
    //         });
    //     });

    // requestPromise({url: bookmark.url})
    //     .then(html => {
    //         const dom = new JSDOM(html);
    //         bookmark.title = dom.window.document.querySelector("title").text;
    //         bookmark.image = dom.window.document.querySelector("meta[property='og:site_name']").content;
    //         bookmark.save(err => {
    //             if(err) {
    //                 return res.status(400).send({message: err.message, errors: err.errors});
    //             }
    //             res.json(bookmark);
    //         });
    //     })
    //     .catch(err => {
    //         console.log('err', err.message);
    //     });
};

exports.update = function (req, res) {
    const bookmark = req.bookmark;
    const { title, url, image } = req.body;

    bookmark.title = title;
    bookmark.url = url;
    bookmark.image = image;

    bookmark.save()
        .then(bookmark => res.json(bookmark))
        .catch(err => res.status(400).send({message: err.message, }));
};

exports.screenshot = function(req, res) {
    const bookmark = req.bookmark;
    // const url = bookmark.url;

    const saveBookmark = () => {

    };

    const pageres = new Pageres({delay: 2})
        .src(bookmark.url, ['1280x1024'], {crop: true})
        .dest(__dirname + '../../../../../../static')
        .run()
        .then((data) => {
            requestPromise({url: bookmark.url})
                .then(html => {
                    const dom = new JSDOM(html);
                    // bookmark.title = dom.window.document.querySelector("title").text;
                    bookmark.title = dom.window.document.querySelector("meta[property='og:site_name']").content;
                    bookmark.image = data[0].filename;
                    bookmark.save()
                        .then(() => res.json(bookmark))
                        .catch(err => res.status(400).send({message: err.message, errors: err.errors}));
                    // bookmark.save(err => {
                    //     if(err) {
                    //         return res.status(400).send({message: err.message, errors: err.errors});
                    //     }
                    //     res.json(bookmark);
                    // });
                })
                .catch(err => res.json(err => res.status(400).send({message: err.message, errors: err.errors})));


            // const filename = data[0].filename;
            // bookmark.image = filename;
            // bookmark.save()
            //     .then(() => res.json(bookmark))
            //     .catch(err => res.status(400).send({message: err.message, errors: err.errors}));
            // res.json({filename: filename})
        })
        .catch(err => res.json(err => res.status(400).send({message: err.message, errors: err.errors})));
};

/**
 * Bookmark middleware
 */
exports.bookmarkById = function (req, res, next, id) {
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).send({message: 'Bookmark id is invalid'});
    }

    Bookmark.findById(id).then(bookmark => {
        if(!bookmark) {
            return res.status(404).send({message: `No bookmark found for id ${id}`});
        }

        req.bookmark = bookmark;
        next();
    })
    .catch(err => {
        return next(err);
    });
};
