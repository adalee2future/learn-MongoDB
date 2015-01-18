use tutorials

db.people.find()
// { "_id" : ObjectId("54ba52700d5babe31838a9f0"), "name" : "Bob" }
// { "_id" : ObjectId("54ba52780d5babe31838a9f1"), "name" : "CharLie" }
// { "_id" : ObjectId("54ba52800d5babe31838a9f2"), "name" : "Dave" }
// { "_id" : ObjectId("54ba528a0d5babe31838a9f3"), "name" : "Edgar" }
// { "_id" : ObjectId("54ba52910d5babe31838a9f4"), "name" : "Fred" }
// { "_id" : ObjectId("54ba52b60d5babe31838a9f5"), "name" : "Smith", "age" : 30, "profession" : "haker" }
// { "_id" : ObjectId("54ba52c90d5babe31838a9f6"), "name" : "Jones", "age" : 35, "profession" : "haker" }
// { "_id" : ObjectId("54ba544c0d5babe31838a9f7"), "name" : 42 }

// set Smith's age to be 31
db.people.update({name : "Smith"}, {$set: {age : 35}})
// increase Smith's age by 2
db.people.update({name : "Smith"}, {$inc: {age : 2}})

// remove profession field of Jones
db.people.update({name : "Jones"}, {$unset : {profession : true}})
