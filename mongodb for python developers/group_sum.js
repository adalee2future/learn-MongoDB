db.applies.find().pretty()
//{
//	"_id" : ObjectId("5496d3470fb42978fcdcec63"),
//	"sID" : 123,
//	"cName" : "Stanford",
//	"major" : "CS",
//	"decision" : "Y"
//}
//{
//	"_id" : ObjectId("5496d3470fb42978fcdcec64"),
//	"sID" : 123,
//	"cName" : "Stanford",
//	"major" : "EE",
//	"decision" : "N"
//}
//{
//	"_id" : ObjectId("5496d3470fb42978fcdcec65"),
//	"sID" : 123,
//	"cName" : "Berkeley",
//	"major" : "CS",
//	"decision" : "Y"
//}
//{
//	"_id" : ObjectId("5496d3470fb42978fcdcec66"),
//	"sID" : 123,
//	"cName" : "Cornell",
//	"major" : "EE",
//	"decision" : "Y"
//}
//{
//	"_id" : ObjectId("5496d3470fb42978fcdcec67"),
//	"sID" : 234,
//	"cName" : "Berkeley",
//	"major" : "biology",
//	"decision" : "N"
//}
//{
//	"_id" : ObjectId("5496d3470fb42978fcdcec68"),
//	"sID" : 345,
//	"cName" : "MIT",
//	"major" : "bioengineering",
//	"decision" : "Y"
//}
//{
//	"_id" : ObjectId("5496d3470fb42978fcdcec69"),
//	"sID" : 345,
//	"cName" : "Cornell",
//	"major" : "CS",
//	"decision" : "Y"
//}
//{
//	"_id" : ObjectId("5496d3470fb42978fcdcec6a"),
//	"sID" : 345,
//	"cName" : "Cornell",
//	"major" : "EE",
//	"decision" : "N"
//}
//{
//	"_id" : ObjectId("5496d3470fb42978fcdcec6b"),
//	"sID" : 345,
//	"cName" : "Cornell",
//	"major" : "CS",
//	"decision" : "Y"
//}
//{
//	"_id" : ObjectId("5496d3470fb42978fcdcec6c"),
//	"sID" : 678,
//	"cName" : "Stanford",
//	"major" : "history",
//	"decision" : "Y"
//}
//{
//	"_id" : ObjectId("5496d3470fb42978fcdcec6d"),
//	"sID" : 987,
//	"cName" : "Stanford",
//	"major" : "CS",
//	"decision" : "Y"
//}
//{
//	"_id" : ObjectId("5496d3470fb42978fcdcec6e"),
//	"sID" : 987,
//	"cName" : "Berkeley",
//	"major" : "CS",
//	"decision" : "Y"
//}
//{
//	"_id" : ObjectId("5496d3470fb42978fcdcec6f"),
//	"sID" : 876,
//	"cName" : "Stanford",
//	"major" : "CS",
//	"decision" : "N"
//}
//{
//	"_id" : ObjectId("5496d3470fb42978fcdcec70"),
//	"sID" : 876,
//	"cName" : "MIT",
//	"major" : "marine biology",
// "decision" : "N"
//}
//{
//	"_id" : ObjectId("5496d3470fb42978fcdcec71"),
//	"sID" : 876,
//	"cName" : "MIT",
//	"major" : "biology",
//	"decision" : "Y"
//}
//{
//	"_id" : ObjectId("5496d3470fb42978fcdcec72"),
//	"sID" : 765,
//	"cName" : "Stanford",
//	"major" : "history",
//	"decision" : "Y"
//}
//{
//	"_id" : ObjectId("5496d3470fb42978fcdcec73"),
//	"sID" : 765,
//	"cName" : "Cornell",
//	"major" : "history",
//	"decision" : "N"
//}
//{
//	"_id" : ObjectId("5496d3470fb42978fcdcec74"),
//	"sID" : 765,
//	"cName" : "Cornell",
//	"major" : "psychology",
//	"decision" : "Y"
//}
//{
//	"_id" : ObjectId("5496d3470fb42978fcdcec75"),
//	"sID" : 543,
//	"cName" : "MIT",
//	"major" : "CS",
//	"decision" : "N"
//}

db.applies.aggregate([{$group:{_id:"$sID", num_aps: {$sum:1}}}])
//{ "_id" : 765, "num_aps" : 3 }
//{ "_id" : 876, "num_aps" : 3 }
//{ "_id" : 987, "num_aps" : 2 }
//{ "_id" : 543, "num_aps" : 1 }
//{ "_id" : 678, "num_aps" : 1 }
//{ "_id" : 345, "num_aps" : 4 }
//{ "_id" : 234, "num_aps" : 1 }
//{ "_id" : 123, "num_aps" : 4 }
