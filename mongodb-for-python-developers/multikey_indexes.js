db.foo.insert({a:1, b:1})
// WriteResult({ "nInserted" : 1 })
db.foo.ensureIndex( { a : 1, b : 1 } )
//{
//	"createdCollectionAutomatically" : false,
//	"numIndexesBefore" : 1,
//	"numIndexesAfter" : 2,
//	"ok" : 1
//}
db.foo.find( { a : 1 } )
//{ "_id" : ObjectId("54cd8f8141e0489de3d883c6"), "a" : 1, "b" : 1 }
db.foo.find( { a : 1 } ).explain()
//{
//	"cursor" : "BtreeCursor a_1_b_1",
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
//		"a" : [
//			[
//				1,
//				1
//			]
//		],
//		"b" : [
//			[
//				{
//				"$minElement" : 1
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
db.foo.insert({a : [1, 2, 3], b : 5})
//WriteResult({ "nInserted" : 1 })
db.foo.find({a : 1}).explain()
//{
//	"cursor" : "BtreeCursor a_1_b_1",
//	"isMultiKey" : true,
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
//		"a" : [
//			[
//				1,
//				1
//			]
//		],
//		"b" : [
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
db.foo.insert({a : [1, 2, 3], b : [3, 4, 5]}) // could not create since a and b both would become multikey-index
//WriteResult({
//	"nInserted" : 0,
//	"writeError" : {
//		"code" : 10088,
//		"errmsg" : "insertDocument :: caused by :: 10088 cannot index parallel arrays [b] [a]"
//	}
//})
