use test
t2 = db.dupdemo
test.dupdemo
> t2.insert([{x : 3}, {x:4}, {x:5}])
// BulkWriteResult({
//	"writeErrors" :  [ ], 
//	"writeConcernErrors" : [ ],
//	"nInserted" : 3,
//	"nUpserted" : 0,
//	"nMatched" : 0,
//	"nModified" : 0,
//	"nRemoved" : 0,
//	"upserted" : [ ]
//})

t2.ensureIndex({x : 1}, {unique :  true})
