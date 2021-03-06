/**
 * Created by Joeri55 on 28-10-2014.
 */
/*jslint node:true*/
/*jslint nomen: true*/
/*jslint unparam:true*/
"use strict";

var mongoose = require('mongoose'),
    KwizzUitvoering = mongoose.model('KwizzUitvoering'),
    Team = mongoose.model('Team');

exports.createOne = function (req, res) {
    var doc = new KwizzUitvoering({
        password: req.body.password,
        status: req.body.status
    });

    doc.save(function (err) {
        if (err) {
            return res.send({
                doc: null,
                err: err
            });
        }

        res.send({
            doc: doc,
            err: err,
            meta: {}
        });
    });
};

exports.retrieveOne = function (req, res) {
    KwizzUitvoering.findOne({_id: req.params.id}, function (err, person) {
        if (err) {
            return res.send({
                doc: null,
                err: err
            });
        }
        res.json({
            doc: person,
            err: err
        });
    });
};


exports.retrieveAll = function (req, res) {
    KwizzUitvoering.find(function (err, doc) {
        if (err) {
            return res.send(
                {
                    doc: null,
                    err: err
                }
            );
        }

        res.json({
            doc: doc,
            err: err
        });
    });
};


exports.updateOne = function (req, res) {
    KwizzUitvoering.findOne({password: req.params.id}, function (err, doc) {
        if (err) {
            return res.send({
                doc: null,
                err: err
            });
        }

        doc.status = req.body.status;

        // save the doc
        doc.save(function (err) {
            if (err) {
                return res.send({
                    doc: null,
                    err: err
                });
            }

            res.json({
                doc: doc,
                err: err
            });
        });
    });
};
