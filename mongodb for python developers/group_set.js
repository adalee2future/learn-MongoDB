db.goods.find()
//{ "_id" : ObjectId("54d3584fa7d3ea1ddd74b6ac"), "category" : "vegetable", "good" : "apple", "price" : 2.5 }
//{ "_id" : ObjectId("54d3585fa7d3ea1ddd74b6ad"), "category" : "vegetable", "good" : "banana", "price" : 2.3 }
//{ "_id" : ObjectId("54d358e3a7d3ea1ddd74b6ae"), "category" : "clothing", "good" : "gloves", "price" : 5.8 }
//{ "_id" : ObjectId("54d35905a7d3ea1ddd74b6af"), "category" : "clothing", "good" : "pants", "price" : 59 }
//{ "_id" : ObjectId("54d3621da7d3ea1ddd74b6b0"), "category" : "clothing", "good" : "pants", "price" : 88 }

// add to set (distinct)
db.goods.aggregate([{$group: {_id:"$category", stuffs:{$addToSet:"$good"}}}])
//{ "_id" : "clothing", "stuffs" : [ "pants", "gloves" ] }
//{ "_id" : "vegetable", "stuffs" : [ "banana", "apple" ] }

// push (can duplicate)
db.goods.aggregate([{$group: {_id:"$category", stuffs:{$push:"$good"}}}])
//{ "_id" : "clothing", "stuffs" : [ "gloves", "pants", "pants" ] }
//{ "_id" : "vegetable", "stuffs" : [ "apple", "banana" ] }






