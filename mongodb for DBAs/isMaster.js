db.runCommand({isMaster:1})
// {
//	"ismaster" : true,
//	"maxBsonObjectSize" : 16777216,
//	"maxMessageSizeBytes" : 48000000,
//	"maxWriteBatchSize" : 1000,
//	"localTime" : ISODate("2015-01-17T06:35:31.800Z"),
//	"maxWireVersion" : 2,
//	"minWireVersion" : 0,
//	"ok" : 1
//}

// another way
db.runCommand("isMaster")
