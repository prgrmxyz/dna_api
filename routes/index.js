var express = require('express');
var router = express.Router();
var connection = require('../utils/db');

router.get('/', function (request, response, next) {
    connection.getConnection().then(db => {
        var output = db.collection("data").aggregate([
            {
                $match: {}
            },
            {
                $group: {
                    _id: "$chromosome",
                    count: {$sum: 1}
                }
            }
        ]).toArray();

        output.then(value => {
            response.status(200).json(value);
        });
    }, reason => {
        throw reason
    });
});

module.exports = router;
