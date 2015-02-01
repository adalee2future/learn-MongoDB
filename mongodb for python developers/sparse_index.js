db.products.find().pretty()
//{
//	"_id" : ObjectId("54cd970241e0489de3d883c9"),
//	"item" : "polo shirt",
//	"size" : "medium"
//}
//{
//	"_id" : ObjectId("54cd973841e0489de3d883ca"),
//	"item" : "jeans",
//	"size" : "32×32"
//}
//{ "_id" : ObjectId("54cd974941e0489de3d883cb"), "item" : "iphone cradle" }
//{ "_id" : ObjectId("54cd975a41e0489de3d883cc"), "item" : "DVI-to-VGA cable" }


db.products.ensureIndex({size:1},{unique:true, sparse:true})
//{
//	"createdCollectionAutomatically" : false,
//	"numIndexesBefore" : 1,
//	"numIndexesAfter" : 2,
//	"ok" : 1
//}

db.products.find().pretty().sort({size:1})
//{ "_id" : ObjectId("54cd974941e0489de3d883cb"), "item" : "iphone cradle" }
//{ "_id" : ObjectId("54cd975a41e0489de3d883cc"), "item" : "DVI-to-VGA cable" }
//{
//	"_id" : ObjectId("54cd973841e0489de3d883ca"),
//	"item" : "jeans",
//	"size" : "32×32"
//}
//{
//	"_id" : ObjectId("54cd970241e0489de3d883c9"),
//	"item" : "polo shirt",
//	"size" : "medium"
//}
db.products.find().pretty().sort({size:1}).explain()
//{
//	"cursor" : "BasicCursor",
//	"isMultiKey" : false,
//	"n" : 4,
//	"nscannedObjects" : 4,
//	"nscanned" : 4,
//	"nscannedObjectsAllPlans" : 4,
//	"nscannedAllPlans" : 4,
//	"scanAndOrder" : true,
//	"indexOnly" : false,
//	"nYields" : 0,
//	"nChunkSkips" : 0,
//	"millis" : 0,
//	"server" : "AdaLeedeMacBook-Pro.local:27017",
//	"filterSet" : false
//}
db.products.find().pretty().sort({size:1}).hint({size:1})
//{
//	"_id" : ObjectId("54cd973841e0489de3d883ca"),
//	"item" : "jeans",
//	"size" : "32×32"
//}
//{
//	"_id" : ObjectId("54cd970241e0489de3d883c9"),
//	"item" : "polo shirt",
//	"size" : "medium"
//}
db.products.find().pretty().sort({size:1}).hint({size:1}).explain()
//{
//	"cursor" : "BtreeCursor size_1",
//	"isMultiKey" : false,
//	"n" : 2,
//	"nscannedObjects" : 2,
//	"nscanned" : 2,
//	"nscannedObjectsAllPlans" : 2,
//	"nscannedAllPlans" : 2,
//	"scanAndOrder" : false,
//	"indexOnly" : false,
//	"nYields" : 0,
//	"nChunkSkips" : 0,
//	"millis" : 0,
//	"indexBounds" : {
//		"size" : [
//			[
//				{
//					"$minElement" : 1
//				},
//				{
//					"$maxElement" : 1
//				}
//			]
//		]
//	},
//	"server" : "AdaLeedeMacBook-Pro.local:27017",
//	"filterSet" : false
//}
