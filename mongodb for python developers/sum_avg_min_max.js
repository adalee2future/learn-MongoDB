db.goods.find()
//{ "_id" : ObjectId("54d3584fa7d3ea1ddd74b6ac"), "category" : "vegetable", "good" : "apple", "price" : 2.5 }
//{ "_id" : ObjectId("54d3585fa7d3ea1ddd74b6ad"), "category" : "vegetable", "good" : "banana", "price" : 2.3 }
//{ "_id" : ObjectId("54d358e3a7d3ea1ddd74b6ae"), "category" : "clothing", "good" : "gloves", "price" : 5.8 }
//{ "_id" : ObjectId("54d35905a7d3ea1ddd74b6af"), "category" : "clothing", "good" : "pants", "price" : 59 }

// sum
db.goods.aggregate([{$group: {_id:"$category", sum_prices:{$sum:"$price"}}}])
//{ "_id" : "clothing", "sum_prices" : 64.8 }
//{ "_id" : "vegetable", "sum_prices" : 4.8 }

//avg
db.goods.aggregate([{$group: {_id:"$category", avg_prices:{$sum:"$price"}}}])
//{ "_id" : "clothing", "avg_prices" : 64.8 }
//{ "_id" : "vegetable", "avg_prices" : 4.8 }

// min
db.goods.aggregate([{$group: {_id:"$category", min_prices:{$min:"$price"}}}])
//{ "_id" : "clothing", "min_prices" : 5.8 }
//{ "_id" : "vegetable", "min_prices" : 2.3 }

//max
db.goods.aggregate([{$group: {_id:"$category", max_prices:{$max:"$price"}}}])
//{ "_id" : "clothing", "max_prices" : 59 }
//{ "_id" : "vegetable", "max_prices" : 2.5 }




