var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
const getConnection = function() {
    return new Promise((resolve, reject) => {
        MongoClient.connect(url, function(err, db) {
            if (err) reject(err);
            var dbo = db.db("dna_db");
            resolve(dbo);
        });
    });
};
exports.getConnection = getConnection;
