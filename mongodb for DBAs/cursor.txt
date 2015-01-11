// insert 20000 data
for(var i = 0; i < 20000; i++) {db.test.insert({x:i, y:"hi"})}

// see how many data
db.test.count()

db.test.find()  // only show 20 data
it  // for more

db.test.find({x:19000})
db.test.find().skip(2000).limit(20)
var query = db.test.find().sort({x:-1}).skip(20).limit(5)

var cursor = db.test.find();
cursor.hasNext()
cursor.next()
cursor.next()

// loop over cursor
var cursor = db.test.find().limit(50);
while (cursor.hasNext()) printjson(cursor.next());

var cursor = db.test.find().limit(50);
while (cursor.hasNext()) print(cursor.next().x);

db.scores.find({type: "exam"}).skip(50).limit(20).sort({score: 1})