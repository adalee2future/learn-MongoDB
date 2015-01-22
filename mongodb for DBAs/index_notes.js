use test
t = db.example_week5_1
t.find()
// { "_id" : ObjectId("54c0d806796e258876b0b442"), "x" : 3 }
// { "_id" : ObjectId("54c0d809796e258876b0b443"), "x" : 6 }
// { "_id" : ObjectId("54c0d80c796e258876b0b444"), "x" : 5 }
// { "_id" : ObjectId("54c0d80f796e258876b0b445"), "x" : 55 }
// { "_id" : ObjectId("54c0d812796e258876b0b446"), "x" : 1 }
// { "_id" : ObjectId("54c0d816796e258876b0b447"), "x" : null }
// { "_id" : ObjectId("54c0d81d796e258876b0b448"), "x" : "hello" }
// { "_id" : ObjectId("54c0d825796e258876b0b449") }
// { "_id" : ObjectId("54c0d9c9796e258876b0b44a") }

// ensureIndex
t.ensureIndex({x: 1})
// insert a string, a long number
t.insert({x : "6"})
t.insert({x : NumberLong(5)})
// sort
t.find().sort({ x: 1})
// { "_id" : ObjectId("54c0d816796e258876b0b447"), "x" : null }
// { "_id" : ObjectId("54c0d825796e258876b0b449") }
// { "_id" : ObjectId("54c0d9c9796e258876b0b44a") }
// { "_id" : ObjectId("54c0d812796e258876b0b446"), "x" : 1 }
// { "_id" : ObjectId("54c0d806796e258876b0b442"), "x" : 3 }
// { "_id" : ObjectId("54c0d80c796e258876b0b444"), "x" : 5 }
// { "_id" : ObjectId("54c0db2c796e258876b0b44c"), "x" : NumberLong(5) }
// { "_id" : ObjectId("54c0d809796e258876b0b443"), "x" : 6 }
// { "_id" : ObjectId("54c0d80f796e258876b0b445"), "x" : 55 }
// { "_id" : ObjectId("54c0da5f796e258876b0b44b"), "x" : "6" }
// { "_id" : ObjectId("54c0d81d796e258876b0b448"), "x" : "hello" }
