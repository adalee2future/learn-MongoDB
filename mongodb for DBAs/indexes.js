use pcat

db.products.find({}, {name: 1}).sort({name:1})
// { "_id" : ObjectId("507d95d5719dbef170f15bfc"), "name" : "AC3 Case Black" }
// { "_id" : ObjectId("507d95d5719dbef170f15bfa"), "name" : "AC3 Case Green" }
// { "_id" : ObjectId("507d95d5719dbef170f15bfd"), "name" : "AC3 Case Red" }
// { "_id" : "ac3", "name" : "AC3 Phone" }
// { "_id" : ObjectId("507d95d5719dbef170f15bf9"), "name" : "AC3 Series Charger" }
// { "_id" : "ac7", "name" : "AC7 Phone" }
// { "_id" : ObjectId("507d95d5719dbef170f15c01"), "name" : "Cable TV Basic Service Package" }
// { "_id" : ObjectId("507d95d5719dbef170f15bfb"), "name" : "Phone Extended Warranty" }
// { "_id" : ObjectId("507d95d5719dbef170f15bfe"), "name" : "Phone Service Basic Plan" }
// { "_id" : ObjectId("507d95d5719dbef170f15bff"), "name" : "Phone Service Core Plan" }
// { "_id" : ObjectId("507d95d5719dbef170f15c00"), "name" : "Phone Service Family Plan" }

db.products.ensureIndex({name: 1})  
db.products.find({name: "AC3 Case Red"}).pretty()

db.products.find({name: "AC3 Case Red"}).explain()
//{
//	"cursor" : "BtreeCursor name_1",
//	"isMultiKey" : false,
//	"n" : 1,
//	"nscannedObjects" : 1,
//	"nscanned" : 1,
//	"nscannedObjectsAllPlans" : 1,
//	"nscannedAllPlans" : 1,
//	"scanAndOrder" : false,
//	"indexOnly" : false,
//	"nYields" : 0,
//	"nChunkSkips" : 0,
//	"millis" : 0,
//	"indexBounds" : {
//		"name" : [
//			[
//				"AC3 Case Red",
//				"AC3 Case Red"
//			]
//		]
//	},
//	"server" : "AdaLeedeMacBook-Pro.local:27017",
//	"filterSet" : false
//}

db.products.getIndexes()
//[
//	{
//		"v" : 1,
//		"key" : {
//			"_id" : 1
//		},
//		"name" : "_id_",
//		"ns" : "pcat.products"
//	},
//	{
//		"v" : 1,
//		"key" : {
//			"name" : 1
//		},
//		"name" : "name_1",
//		"ns" : "pcat.products"
//	}
//]

// drop index
db.products.dropIndex({name: 1})

db.products.getIndexes()
//[
//	{
//		"v" : 1,
//		"key" : {
//			"_id" : 1
//		},
//		"name" : "_id_",
//		"ns" : "pcat.products"
//	}
//]
