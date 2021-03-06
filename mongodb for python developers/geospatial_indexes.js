db.stores.find().pretty()
// {
//	"_id" : ObjectId("54cda86841e0489de3d883cd"),
//	"name" : "Rubys",
//	"type" : "Barber",
//	"location" : [
//		40,
//		74
//	]
//}
//{
//	"_id" : ObjectId("54cda89341e0489de3d883ce"),
//	"name" : "ACE Hardware",
//	"type" : "Hardware",
//	"location" : [
//		40.232,
//		-74.343
//	]
//}
//{
//	"_id" : ObjectId("54cda8bb41e0489de3d883cf"),
//	"name" : "Trickle Candy",
//	"type" : "Food",
//	"location" : [
//		41.232,
//		-75.343
//	]
//}

// create a 2d index on location field
db.stores.ensureIndex({location : '2d', type : 1})
//{
//	"createdCollectionAutomatically" : false,
//	"numIndexesBefore" : 1,
//	"numIndexesAfter" : 2,
//	"ok" : 1
//}

// find stores which is near [50, 50]
db.stores.find( { location : { $near : [50, 50] } } )
//{ "_id" : ObjectId("54cda86841e0489de3d883cd"), "name" : "Rubys", "type" : "Barber", "location" : [ 40, 74 ] }
//{ "_id" : ObjectId("54cda89341e0489de3d883ce"), "name" : "ACE Hardware", "type" : "Hardware", "location" : [ 40.232, -74.343 ] }
//{ "_id" : ObjectId("54cda8bb41e0489de3d883cf"), "name" : "Trickle Candy", "type" : "Food", "location" : [ 41.232, -75.343 ] }
