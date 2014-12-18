for (var i = 100; i > 0; i--) {db.users.insert({age: i})}

db.users.find({age: {$gt: 85}}).sort({age: 1})
db.users.find({age: {$lt: 12}}).limit(5)