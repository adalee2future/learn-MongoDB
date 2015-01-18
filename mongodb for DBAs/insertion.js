use create_lesson_db  // create a new db and use it
db

db.sample.insert({a: 1})
show collections

db.sample.insert({a: 1})
db.sample.insert({a: 7})
db.sample.insert({b: 1})
db.sample.insert({a: 7, b: "a string", someOtherField: 22.34})

db.sample.find().pretty()
db.sample.find().toArray()

db.getLastError()
db.help()

