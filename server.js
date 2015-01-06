/**
 * Created by Alexander.Liu on 4/1/2014.
 */
'use strict';

var express = require('express');

var config = require('./conf/config');
// Create the server
var server = express();
require('./knoxupload')(server);

//add listen port
if (!module.parent) {
    server.listen(config.serverPort, function () {
        console.log('%s listening at %s', config.name, config.serverPort);
    });
}
module.exports = server;
