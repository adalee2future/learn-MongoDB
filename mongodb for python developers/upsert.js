use tutorials

db.people.find()
// { "_id" : ObjectId("54bb255f1fc5cd08d9a35ad4"), "a" : 2 }
// { "_id" : ObjectId("54bb25641fc5cd08d9a35ad5"), "a" : 1 }
// { "_id" : ObjectId("54bb25881fc5cd08d9a35ad6"), "name" : "Thompson", "salary" : 50000 }
// { "_id" : ObjectId("54bb25981fc5cd08d9a35ad7"), "name" : "Jones", "salary" : 35 }
// { "_id" : ObjectId("54bb25ac1fc5cd08d9a35ad8"), "name" : "Charlie" }
// { "_id" : ObjectId("54bb25b31fc5cd08d9a35ad9"), "name" : "Dave" }
// { "_id" : ObjectId("54bb25bd1fc5cd08d9a35ada"), "name" : "Edgar" }
// { "_id" : ObjectId("54bb25c21fc5cd08d9a35adb"), "name" : "Fred" }
// { "_id" : ObjectId("54bb25cb1fc5cd08d9a35adc"), "name" : 42 }
// { "_id" : ObjectId("54bb25d61fc5cd08d9a35add"), "name" : "Alice", "age" : 32 }
// { "_id" : ObjectId("54bb25df1fc5cd08d9a35ade"), "name" : "Bob", "age" : 1 }


// no effect since George does not exit
db.people.update( { name : "George"} , {$set : {age : 40}})

// use upsert
db.people.update( { name : "George"} , {$set : {age : 40}}, {upsert : true} )
db.people.find({name: "George"})
// { "_id" : ObjectId("54bb26e7180041a0d4bb1b86"), "name" : "George", "age" : 40 }

