use tutorials

db.accounts.find()
// { "_id" : ObjectId("54ba5def0d5babe31838a9f8"), "name" : "George", "favorites" : [ "ice cream", "pretzels" ] }
// { "_id" : ObjectId("54ba5e640d5babe31838a9f9"), "name" : "Howard", "favorites" : [ "pretzels", "beer" ] }
// { "_id" : ObjectId("54ba60ae0d5babe31838a9fa"), "name" : "Irving", "favorites" : [ "beer", "pretzels", "cheese" ] }
// { "_id" : ObjectId("54ba60c60d5babe31838a9fb"), "name" : "John", "favorites" : [ "beer", "cheese" ] }

// find whose favorites has both pretzels and beer
db.accounts.find({favorites : {$all : ["pretzels", "beer"]}})

// find whose name is Howard or John
db.accounts.find({name : {$in : ["Howard", "John"]}})
