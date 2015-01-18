use pcat
t = db.test

t.find()
// { "_id" : ObjectId("54b8f25d25cf99245ee52f4b"), "x" : "hello" }
// { "_id" : ObjectId("54b8f25f25cf99245ee52f4c"), "x" : "hello" }
// { "_id" : ObjectId("54b8f26225cf99245ee52f4d"), "x" : "hello" }
// { "_id" : 100, "x" : "hello" }
// { "_id" : 101, "x" : "hello" }
t.update({_id:100}, {_id:100, x:"hello world", y:123}) 
// could not update _id

myobj = t.findOne()
myobj.y = 123
t.update({_id: myobj._id}, myobj)

t.find()
