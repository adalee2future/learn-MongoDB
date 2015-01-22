 use test

t2 = db.dupdemo
test.dupdemo
t2.find()
// { "_id" : ObjectId("54c0dc4e796e258876b0b44d"), "x" : 3 }
// { "_id" : ObjectId("54c0dc4e796e258876b0b44e"), "x" : 4 }
// { "_id" : ObjectId("54c0dc4e796e258876b0b44f"), "x" : 5 }
// { "_id" : ObjectId("54c0f6a2796e258876b0b47d"), "x" : 4, "str" : "Hello" }

t2.ensureIndex({x : 1}, {unique : true})
//{
//	"createdCollectionAutomatically" : false,
//	"numIndexesBefore" : 1,
//	"ok" : 0,
//	"errmsg" : "E11000 duplicate key error index: test.dupdemo.$x_1  dup key: { : 4.0 }",
//	"code" : 11000
//}
t2.ensureIndex({x : 1}, {unique : true, dropDups : true})
//{
//	"createdCollectionAutomatically" : false,
//	"numIndexesBefore" : 1,
//	"numIndexesAfter" : 2,
//	"ok" : 1
//}
t2.find()
// { "_id" : ObjectId("54c0dc4e796e258876b0b44d"), "x" : 3 }
// { "_id" : ObjectId("54c0dc4e796e258876b0b44e"), "x" : 4 }
// { "_id" : ObjectId("54c0dc4e796e258876b0b44f"), "x" : 5 }
