mkdir data  // make a directory
mongod --dpath data --auth 
mongo localhost/test

db.foo.insert({str:"test"})

use admin
var me = {user : "adalee", pwd : "pswd", roles : ["userAdminAnyDatabase"]}
// create a user
db.createUser(me)
// Successfully added user: { "user" : "adalee", "roles" : [ "userAdminAnyDatabase" ] }

// connect to the mongod with username adalee
mongo localhost/admin -u adalee -p pswd
// create another user
var w = {user : "will", roles: ["readWriteAnyDatabase"], pwd: "abc"}
db.createUser(w)
// Successfully added user: { "user" : "will", "roles" : [ "readWriteAnyDatabase" ] }

// connect to the mongod with username will
mongo localhost/admin -u will -p abc
db.system.namespaces.find()
//{ "name" : "test.foo" }
//{ "name" : "test.system.indexes" }
//{ "name" : "test.foo.$_id_" }

use test
db.foo.find()
//{ "_id" : ObjectId("54e40ff5814673a668de9132"), "str" : "test" }
db.foo.insert({str: "another"})

// connect to the mongod with username adalee
var a = {user: "andrew", pwd : "asdf", roles : ["readWrite"]}
use test_db2
db.createUser(a)

// connect to the mongod with username andrew
mongo localhost/test_db2 -u andrew -p asdf
db.test_collection.insert({})
use test
db.foo.find()
// error: { "$err" : "not authorized for query on test.foo", "code" : 13 }
