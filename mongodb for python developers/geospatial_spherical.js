db.places.find().pretty()
//{
//	"_id" : ObjectId("54cdae0d41e0489de3d883d1"),
//	"name" : "Apple Store",
//	"city" : "Palo Alto",
//	"location" : {
//		"type" : "Point",
//		"coordinates" : [
//			-122.1691921,
//			37.4434854
//		]
//	},
//	"type" : "Retail"
//}
//{
//	"_id" : ObjectId("54cdaede41e0489de3d883d2"),
//	"name" : "Penisula Creanery",
//	"city" : "Palo Alto",
//	"location" : {
//		"type" : "Point",
//		"coordinates" : [
//			-122.158428,
//			37.440675
//		]
//	},
//	"type" : "Restaurant"
//}
//{
//	"_id" : ObjectId("54cdaf4941e0489de3d883d3"),
//	"name" : "Fry's Electronics",
//	"city" : "Palo Alto",
//	"location" : {
//		"type" : "Point",
//		"coordinates" : [
//			-122.137044,
//			37.423556
//		]
//	},
//	"type" : "Retail"
//}
//{
//	"_id" : ObjectId("54cdb01d41e0489de3d883d4"),
//	"name" : "Mt. Tamalpais State Park",
//	"city" : "Mill Valley",
// "location" : {
//		"type" : "Point",
//		"coordinates" : [
//			-122.5995522,
//			37.895943
//		]
//	},
//	"type" : "Park"
//}

db.places.ensureIndex({location: '2dsphere'})
