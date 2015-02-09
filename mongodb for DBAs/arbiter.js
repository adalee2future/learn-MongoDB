// on the shell
mongod  --replSet abc --dbpath 1 --port 27001 --oplogSize 50 -logpath log.1 --logappend --fork
mongod  --replSet abc --dbpath 2 --port 27002 --oplogSize 50 -logpath log.2 --logappend --fork
mongod  --replSet abc --dbpath 3 --port 27003 --oplogSize 50 -logpath log.3 --logappend --fork
ps
ps -ef

mongo --port 27001 // PRIMARY

// in mongo shell
cfg = {
    _id : "abc",
    members : [
        { _id:0, host: "localhost:27001"},
        { _id:1, host: "localhost:27002", arbiterOnly: true},
        { _id:2, host: "localhost:27003"}
    ]
}

rs.initiate(cfg)


// open new terminal, ARBITER
mongo --port 27002
rs.status()

// open new terminal, SECONDARY
mongo --port 27003


