var ada = {name: 'Ada', age: 23, gender: 'F'}

db.scores.save({a: 99})
db.scores.save(ada)
for (i = 0; i < 20; i++) {db.scores.save({a: i, exam: 5})}
db.scores.find()

db.scores.find({a: 2})
db.scores.find({a: {$gt: 15}}) // Greater than
db.scores.find({a: {$lt: 4}})  // Less than
db.scores.find({a: {$lte: 4}}) // Less than or equal to
db.scores.find({a: {$gte: 4}}) // Greater than or equal to
db.scores.find({a: {$ne: 0}})  //Not Equal to
db.scores.find({a: {$in: [0, 1, 2, 5, 6]}})  // Exists in array






