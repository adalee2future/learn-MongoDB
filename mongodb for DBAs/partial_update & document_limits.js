use pcat    // switch to db pcat
t = db.test

t.find()
// { "_id" : ObjectId("54b8f25d25cf99245ee52f4b"), "x" : "hello", "y" : 123 }
// { "_id" : ObjectId("54b8f25f25cf99245ee52f4c"), "x" : "hello" }
// { "_id" : ObjectId("54b8f26225cf99245ee52f4d"), "x" : "hello" }
// { "_id" : 100, "x" : "hello world", "y" : 400 }
// { "_id" : 101, "x" : "hello" }
// { "_id" : ObjectId("54b90e8c55f8cc78a62d3cb0"), "x" : "hello" }
// { "_id" : ObjectId("54b90eb655f8cc78a62d3cb1"), "x" : "hello" }

t.update({_id: 101}, {$set: {y: 100}})
t.find()
// { "_id" : ObjectId("54b8f25d25cf99245ee52f4b"), "x" : "hello", "y" : 123 }
// { "_id" : ObjectId("54b8f25f25cf99245ee52f4c"), "x" : "hello" }
// { "_id" : ObjectId("54b8f26225cf99245ee52f4d"), "x" : "hello" }
// { "_id" : 100, "x" : "hello world", "y" : 400 }
// { "_id" : 101, "x" : "hello", "y" : 100 }
// { "_id" : ObjectId("54b90e8c55f8cc78a62d3cb0"), "x" : "hello" }
// { "_id" : ObjectId("54b90eb655f8cc78a62d3cb1"), "x" : "hello" }

mydoc = {$set: {y: 100}}    // { "$set" : { "y" : 100 } }

t.update({_id: 101}, {$inc: {y: 1}}) // increase y by one
// push an array, if it does not exist, will create one
t.update({_id:101}, {$push: {arr: "hi"}})
t.update({_id:101}, {$push: {arr: "hi"}})
t.update({_id:101}, {$push: {arr: "hi"}})
t.update({_id:101}, {$push: {arr: "hi"}})

t.find()
// { "_id" : ObjectId("54b8f25d25cf99245ee52f4b"), "x" : "hello", "y" : 123 }
// { "_id" : ObjectId("54b8f25f25cf99245ee52f4c"), "x" : "hello" }
// { "_id" : ObjectId("54b8f26225cf99245ee52f4d"), "x" : "hello" }
// { "_id" : 100, "x" : "hello world", "y" : 400 }
// { "_id" : ObjectId("54b90e8c55f8cc78a62d3cb0"), "x" : "hello" }
// { "_id" : ObjectId("54b90eb655f8cc78a62d3cb1"), "x" : "hello" }
// { "_id" : 101, "x" : "hello", "y" : 101, "arr" : [ "hi", "hi", "hi", "hi" ] }

// will only add to list if it does not exist
t.update({_id: 101}, {$addToSet: {arr: "bye"}}) // add "bye"
t.update({_id: 101}, {$addToSet: {arr: "bye"}}) // add nothing



