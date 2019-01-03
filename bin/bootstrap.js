var connection = require('../utils/db');

var lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('./8193.23andme.6530')
});
connection.getConnection().then(db => {
    var col = db.collection('data');
    var batch = col.initializeOrderedBulkOp();
    var count = 1;
    lineReader.on('line',  (line) => {
        line = line.trim();
        if (line[0] !== '#' && line.length > 0) {
            var data = line.split('\t');
            var json = {
                '_id': data[0],
                'chromosome': data[1],
                'position': data[2],
                'genotype': data[3],
            };
            console.log("Inserted: ", count);
            count ++;
            batch.insert(json);
            // db.collection("data").insertOne(json).then(value => console.log("inserted: " + data[0]));
        }
    }).on('close', function(line) {
        batch.execute(function(err, result) {
            console.log("BULK INSERTED COMPLETED");
        });
    });
});
