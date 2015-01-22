use test

db.places.find()
// { "_id" : ObjectId("54c0e0c5796e258876b0b459"), "loc" : [ 2, 2 ] }
// { "_id" : ObjectId("54c0e0c5796e258876b0b45a"), "loc" : [ 4, 2 ] }
// { "_id" : ObjectId("54c0e0c5796e258876b0b45b"), "loc" : [ 2, 5 ] }
// { "_id" : ObjectId("54c0e0c5796e258876b0b45c"), "loc" : [ 1, 1 ] }
// { "_id" : ObjectId("54c0e0c5796e258876b0b45d"), "loc" : [ -20, 23 ] }
// { "_id" : ObjectId("54c0e0c5796e258876b0b45e"), "loc" : [ 40.757699, -73.987632 ] }

db.places.ensureIndex({loc : "2dsphere"})

//
db.places.find( { loc :
    { $near : { $geometry :
                    { type : "Point", coordinates : [2, 2.01] },
                    spherical : true
              }
    }
})
               
