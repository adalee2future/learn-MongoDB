use pcat
db.test.find()
// { "_id" : ObjectId("54b8f25d25cf99245ee52f4b"), "x" : "hello", "y" : 123 }
// { "_id" : ObjectId("54b8f25f25cf99245ee52f4c"), "x" : "hello" }
// { "_id" : ObjectId("54b8f26225cf99245ee52f4d"), "x" : "hello" }
// { "_id" : 100, "x" : "hello world", "y" : 400 }
// { "_id" : ObjectId("54b90e8c55f8cc78a62d3cb0"), "x" : "hello" }
// { "_id" : ObjectId("54b90eb655f8cc78a62d3cb1"), "x" : "hello" }
// { "_id" : 101, "x" : "hello", "y" : 101, "arr" : [ "hi", "hi", "hi", "hi", "bye" ] }

// remove
db.test.remove({_id : 100})

// remove all
db.test.remove({})

// import test.json to test2
mongoimport -d pcat -c test2 test.json
db.test2.find()
// { "_id" : ObjectId("54b8f25f25cf99245ee52f4c"), "x" : "hello" }
// { "_id" : ObjectId("54b8f26225cf99245ee52f4d"), "x" : "hello" }
// { "_id" : 100, "x" : "hello world", "y" : 400 }
// { "_id" : 101, "x" : "hello", "y" : 101, "arr" : [ "hi", "hi", "hi", "hi", "bye" ] }

y = { "_id" : 101, "x" : "hello", "y" : 101, "arr" : [ "hi", "hi", "hi", "hi", "bye" ] }

// use regular expressions
db.test2.remove({x : /ello/}) // all of them gone

