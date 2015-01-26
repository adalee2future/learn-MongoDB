use tutorials
db.students.find()
// { "_id" : 0, "name" : "Andrew Erlichson", "teachers" : [ 0, 1 ] }
// { "_id" : 1, "name" : "Richard Kreuter", "teachers" : [ 0, 1, 3 ] }
// { "_id" : 2, "name" : "Eliot Horowitz", "teachers" : [ 1, 2, 3 ] }
// { "_id" : 3, "name" : "Mark Heinrich", "teachers" : [ 0, 3 ] }

db.teachers.find()
// { "_id" : 0, "name" : "Mark Horowitz" }
// { "_id" : 1, "name" : "John Hennessy" }
// { "_id" : 2, "name" : "Bruce Wolley" }
// { "_id" : 3, "name" : "James Plummer" }

db.students.ensureIndex({teachers : 1})
// {
//	"createdCollectionAutomatically" : false,
//	"numIndexesBefore" : 1,
//	"numIndexesAfter" : 2,
//	"ok" : 1
//}
db.students.find({teachers : {$all : [0, 1]}})
// { "_id" : 0, "name" : "Andrew Erlichson", "teachers" : [ 0, 1 ] }
// { "_id" : 1, "name" : "Richard Kreuter", "teachers" : [ 0, 1, 3 ] }
db.students.find({teachers : {$all : [0, 1]}}).explain()
//{
//	"cursor" : "BtreeCursor teachers_1",
//	"isMultiKey" : true,
//	"n" : 2,
//	"nscannedObjects" : 3,
//	"nscanned" : 3,
//	"nscannedObjectsAllPlans" : 3,
//	"nscannedAllPlans" : 7,
//	"scanAndOrder" : false,
//	"indexOnly" : false,
//	"nYields" : 0,
//	"nChunkSkips" : 0,
//	"millis" : 0,
//	"indexBounds" : {
//		"teachers" : [
//			[
//				0,
//				0
//			]
//		]
//	},
//	"server" : "AdaLeedeMacBook-Pro.local:27017",
//	"filterSet" : false
//}
