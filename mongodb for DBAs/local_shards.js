// on the terminal
mkdir a0 a1 a2 b0 b1 b2 c0 c1 c2 d0 d1 d2 cfg0 cfg1 cfg2
//config servers
mongod --configsvr --dbpath cfg0 --port 26050 --fork --logpath log.cfg0 --logappend
mongod --configsvr --dbpath cfg1 --port 26051 --fork --logpath log.cfg1 --logappend
mongod --configsvr --dbpath cfg2 --port 26052 --fork --logpath log.cfg2 --logappend
// shard servers
mongod --shardsvr --replSet a --dbpath a0 --logpath log.a0 --port 27000 --fork --logappend --smallfiles --oplogSize 50 
mongod --shardsvr --replSet a --dbpath a1 --logpath log.a1 --port 27001 --fork --logappend --smallfiles --oplogSize 50
mongod --shardsvr --replSet a --dbpath a2 --logpath log.a2 --port 27002 --fork --logappend --smallfiles --oplogSize 50 
mongod --shardsvr --replSet b --dbpath b0 --logpath log.b0 --port 27100 --fork --logappend --smallfiles --oplogSize 50 
mongod --shardsvr --replSet b --dbpath b1 --logpath log.b1 --port 27101 --fork --logappend --smallfiles --oplogSize 50 
mongod --shardsvr --replSet b --dbpath b2 --logpath log.b2 --port 27102 --fork --logappend --smallfiles --oplogSize 50 
mongod --shardsvr --replSet c --dbpath c0 --logpath log.c0 --port 27200 --fork --logappend --smallfiles --oplogSize 50 
mongod --shardsvr --replSet c --dbpath c1 --logpath log.c1 --port 27201 --fork --logappend --smallfiles --oplogSize 50 
mongod --shardsvr --replSet c --dbpath c2 --logpath log.c2 --port 27202 --fork --logappend --smallfiles --oplogSize 50 
mongod --shardsvr --replSet d --dbpath d0 --logpath log.d0 --port 27300 --fork --logappend --smallfiles --oplogSize 50 
mongod --shardsvr --replSet d --dbpath d1 --logpath log.d1 --port 27301 --fork --logappend --smallfiles --oplogSize 50 
mongod --shardsvr --replSet d --dbpath d2 --logpath log.d2 --port 27302 --fork --logappend --smallfiles --oplogSize 50
// mongos processes
mongos --configdb AdaLeedeMacBook-Pro.local:26050,AdaLeedeMacBook-Pro.local:26051,AdaLeedeMacBook-Pro.local:26052 --fork --logappend --logpath log.mongos0
mongos --configdb AdaLeedeMacBook-Pro.local:26050,AdaLeedeMacBook-Pro.local:26051,AdaLeedeMacBook-Pro.local:26052 --fork --logappend --logpath log.mongos0 --port 26061
mongos --configdb AdaLeedeMacBook-Pro.local:26050,AdaLeedeMacBook-Pro.local:26051,AdaLeedeMacBook-Pro.local:26052 --fork --logappend --logpath log.mongos0 --port 26062
mongos --configdb AdaLeedeMacBook-Pro.local:26050,AdaLeedeMacBook-Pro.local:26051,AdaLeedeMacBook-Pro.local:26052 --fork --logappend --logpath log.mongos0 --port 26063

// config db
mongo  // connect to mongos
use config
show collections
db.chunks.find()
db.databases.find()    //{ "_id" : "admin", "partitioned" : false, "primary" : "config" }
db.shards.find()


// replica set a
mongo --port 27000
rs.initiate()
//{
//	"info2" : "no configuration explicitly specified -- making one",
//	"me" : "AdaLeedeMacBook-Pro.local:27000",
//	"info" : "Config now saved locally.  Should come online in about a minute.",
//	"ok" : 1
//}

rs.status()
//{
//	"set" : "a",
//	"date" : ISODate("2015-02-16T02:56:21Z"),
//	"myState" : 1,
//	"members" : [
//		{
//			"_id" : 0,
//			"name" : "AdaLeedeMacBook-Pro.local:27000",
//			"health" : 1,
//			"state" : 1,
//			"stateStr" : "PRIMARY",
//			"uptime" : 2457,
//			"optime" : Timestamp(1424055317, 1),
//			"optimeDate" : ISODate("2015-02-16T02:55:17Z"),
//			"electionTime" : Timestamp(1424055317, 2),
//			"electionDate" : ISODate("2015-02-16T02:55:17Z"),
//			"self" : true
//		}
//	],
//	"ok" : 1
//}

rs.add("AdaLeedeMacBook-Pro.local:27001")
rs.add("AdaLeedeMacBook-Pro.local:27002")

rs.config()
//{
//	"_id" : "a",
//	"version" : 3,
//	"members" : [
//		{
//			"_id" : 0,
//			"host" : "AdaLeedeMacBook-Pro.local:27000"
//		},
//		{
//			"_id" : 1,
//			"host" : "AdaLeedeMacBook-Pro.local:27001"
//		},
//		{
//			"_id" : 2,
//			"host" : "AdaLeedeMacBook-Pro.local:27002"
//		}
//	]
//}

// replica set b
mongo --port 27100
rs.initiate()
rs.add("AdaLeedeMacBook-Pro.local:27101")
rs.add("AdaLeedeMacBook-Pro.local:27102")

// replica set c
mongo --port 27200
rs.initiate()
rs.add("AdaLeedeMacBook-Pro.local:27201")
rs.add("AdaLeedeMacBook-Pro.local:27202")

// replica set d
mongo --port 27300
rs.initiate()
rs.add("AdaLeedeMacBook-Pro.local:27301")
rs.add("AdaLeedeMacBook-Pro.local:27302")
 
// on the terminal
mongo
// on the mongo shell
sh.help()
// add shard a
sh.addShard("a/AdaLeedeMacBook-Pro.local:27000")
sh.status()
//--- Sharding Status --- 
// sharding version: {
//	"_id" : 1,
//	"version" : 4,
//	"minCompatibleVersion" : 4,
//	"currentVersion" : 5,
//	"clusterId" : ObjectId("54e1635462d9990db1526b7d")
//}
//  shards:
//	{  "_id" : "a",  "host" : "a/AdaLeedeMacBook-Pro.local:27000,AdaLeedeMacBook-Pro.local:27001,AdaLeedeMacBook-Pro.local:27002" }
//  databases:
//	{  "_id" : "admin",  "partitioned" : false,  "primary" : "config" }
// add shard b
sh.addShard("b/AdaLeedeMacBook-Pro.local:27100")
// add shard c
sh.addShard("c/AdaLeedeMacBook-Pro.local:27200")
// add shard d
sh.addShard("d/AdaLeedeMacBook-Pro.local:27300")

// sharding a collection
use week6
sh.enableSharding("week6")
sh.shardCollection("week6.foo", {_id:1}, true)
t = db.foo
for (var i = 0; i < 20000; i++){
    t.insert({x:i,y:3,z:"test              test"});
}
t.stats()
s = ''
for (var i = 0; i < 7808; i++){
    s += 'a'
}
s.length
for (var i = 0; i < 200000; i++){
    t.insert({x:i,y:3,longer:s,z:"test              test"});
}

sh.status()
//--- Sharding Status --- 
//  sharding version: {
//	"_id" : 1,
//	"version" : 4,
//	"minCompatibleVersion" : 4,
//	"currentVersion" : 5,
//	"clusterId" : ObjectId("54e1635462d9990db1526b7d")
//}
//  shards:
//	{  "_id" : "a",  "host" : "a/AdaLeedeMacBook-Pro.local:27000,AdaLeedeMacBook-Pro.local:27001,AdaLeedeMacBook-Pro.local:27002" }
//	{  "_id" : "b",  "host" : "b/AdaLeedeMacBook-Pro.local:27100,AdaLeedeMacBook-Pro.local:27101,AdaLeedeMacBook-Pro.local:27102" }
//	{  "_id" : "c",  "host" : "c/AdaLeedeMacBook-Pro.local:27200,AdaLeedeMacBook-Pro.local:27201,AdaLeedeMacBook-Pro.local:27202" }
//	{  "_id" : "d",  "host" : "d/AdaLeedeMacBook-Pro.local:27300,AdaLeedeMacBook-Pro.local:27301,AdaLeedeMacBook-Pro.local:27302" }
//  databases:
//	{  "_id" : "admin",  "partitioned" : false,  "primary" : "config" }
//	{  "_id" : "week6",  "partitioned" : true,  "primary" : "a" }
//		week6.foo
//			shard key: { "_id" : 1 }
//			chunks:
//				b	8
//				a	9
//				c	8
//				d	8
//			too many chunks to print, use verbose if you want to force print

// working with sharding collections
t.ensureIndex({x:1})
t.find({_id:ObjectId("54e16f3d7d2c5a491a6f0432")},{longer:0}).explain()
//{
//	"clusteredType" : "ParallelSort",
//	"shards" : {
//		"b/AdaLeedeMacBook-Pro.local:27100,AdaLeedeMacBook-Pro.local:27101,AdaLeedeMacBook-Pro.local:27102" : [
//			{
//				"cursor" : "IDCursor",
//				"n" : 1,
//				"nscannedObjects" : 1,
//				"nscanned" : 1,
//				"indexOnly" : false,
//				"millis" : 0,
//				"indexBounds" : {
//					"_id" : [
//						[
//							ObjectId("54e16f3d7d2c5a491a6f0432"),
//							ObjectId("54e16f3d7d2c5a491a6f0432")
//						]
//					]
//				},
//				"server" : "AdaLeedeMacBook-Pro.local:27102"
//			}
//		]
//	},
//	"cursor" : "IDCursor",
//	"n" : 1,
//	"nscanned" : 1,
//	"nscannedObjects" : 1,
//	"millisShardTotal" : 0,
//	"millisShardAvg" : 0,
//	"numQueries" : 1,
//	"numShards" : 1,
//	"indexBounds" : {
//		"_id" : [
//			[
//				ObjectId("54e16f3d7d2c5a491a6f0432"),
//				ObjectId("54e16f3d7d2c5a491a6f0432")
//			]
//		]
//	},
//	"millis" : 0
//}

t.find({x:-1}).explain()












