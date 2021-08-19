const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const cookieSecret = process.env.COOKIESECRET || 'Elde Ring POG';
// const { errorHandler } = require('../utils')

module.exports = (app) => {
    app.use(express.json());

    app.use(cookieParser(cookieSecret));

    app.use(express.static(path.resolve(__basedir, 'static')));

    app.use((req, res, next) => {
        if (!req.url.includes('favicon')) {
            console.log('>>>', req.method, req.url);

            if (req.user) {
                console.log('Known user', req.user.email);
            }
        }

        next();
    });

    // app.use(errorHandler(err, req, res, next));
};
