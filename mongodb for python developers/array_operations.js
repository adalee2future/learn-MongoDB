use tutorials

db.arrays.find()
// { "_id" : 0, "a" : [ 1, 2, 5, 4 ] }

// push oen element to the array
db.arrays.update({_id : 0}, {$push : {a : 6}})  // [ 1, 2, 5, 4, 6 ]

// pop
db.arrays.update({_id : 0}, {$pop : {a : 1}})   // [ 1, 2, 5, 4 ]
db.arrays.update({_id : 0}, {$pop : {a : -1}})  // [ 2, 5, 4 ]

// push several elements
db.arrays.update({_id : 0}, {$pushAll : {a : [7, 8, 9]}})   // [ 2, 5, 4, 7, 8, 9 ]

// pull one element from the array
db.arrays.update({_id : 0}, {$pull : {a : 5}})  // [ 2, 4, 7, 8, 9 ]

// pull several elements
db.arrays.update({_id : 0}, {$pullAll : {a : [2 , 4, 8]}})  // [ 7, 9 ]

// add to set
db.arrays.update({_id : 0}, {$addToSet : {a : 5}})  // [ 7, 9, 5 ]
db.arrays.update({_id : 0}, {$addToSet : {a : 5}})  // no effect since 5 already exists

