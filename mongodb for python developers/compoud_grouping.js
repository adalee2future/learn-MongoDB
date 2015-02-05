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

db.applies.aggregate([{$group:{_id:{sID:"$sID",major:"$major"}, num_aps: {$sum:1}}}])
//{ "_id" : { "sID" : 765, "major" : "psychology" }, "num_aps" : 1 }
//{ "_id" : { "sID" : 876, "major" : "biology" }, "num_aps" : 1 }
//{ "_id" : { "sID" : 345, "major" : "bioengineering" }, "num_aps" : 1 }
//{ "_id" : { "sID" : 234, "major" : "biology" }, "num_aps" : 1 }
//{ "_id" : { "sID" : 876, "major" : "marine biology" }, "num_aps" : 1 }
//{ "_id" : { "sID" : 987, "major" : "CS" }, "num_aps" : 2 }
//{ "_id" : { "sID" : 345, "major" : "CS" }, "num_aps" : 2 }
//{ "_id" : { "sID" : 876, "major" : "CS" }, "num_aps" : 1 }
//{ "_id" : { "sID" : 543, "major" : "CS" }, "num_aps" : 1 }
//{ "_id" : { "sID" : 678, "major" : "history" }, "num_aps" : 1 }
//{ "_id" : { "sID" : 765, "major" : "history" }, "num_aps" : 2 }
//{ "_id" : { "sID" : 345, "major" : "EE" }, "num_aps" : 1 }
//{ "_id" : { "sID" : 123, "major" : "EE" }, "num_aps" : 2 }
//{ "_id" : { "sID" : 123, "major" : "CS" }, "num_aps" : 2 }
