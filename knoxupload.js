/**
 * Created by Alexander.Liu on 4/1/2014.
 */
'use strict';
var knox = require('knox');
var config = require('./conf/config');
var client = knox.createClient({
    key: config.key
    , secret: config.secret
    , bucket:config.bucket
});
module.exports = function (server) {
    client.putFile('b.jpg', 'b.jpg',
        {'Content-Type': 'application/octet-stream'
            ,'x-amz-acl': 'public-read'
        },
        function(err, result) {
        if (200 == result.statusCode) {
            console.log('Uploaded to mazon S3');
        }
        else { console.log('Failed to upload file to Amazon S3'); }
    });
}

