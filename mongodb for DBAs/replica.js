mkdir dba
cd dba
mkdir 1 2 3
mongod --replSet abc --dbpath 1 --port 27001 --oplogSize 50 --logpath log.1 --logappend --fork 
mongod --replSet abc --dbpath 2 --port 27001 --oplogSize 50 --logpath log.2 --logappend --fork 
mongod --replSet abc --dbpath 3 --port 27001 --oplogSize 50 --logpath log.3 --logappend --fork 

cfg = 
{
	"_id" : "abc",
	"members" : [
		{
			"_id" : 0,
			"host" : "localhost:27001"
		},
		{
			"_id" : 1,
			"host" : "localhost:27002"
		},
		{
			"_id" : 2,
			"host" : "localhost:27003"
		}
	]
}
rs.help()
