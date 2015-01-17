use pcat

db.test3.count()  //215195

db.system.namespaces.find()

use admin
db.runCommand({listDatabases:1})  // could only run on admin database

db.test3.drop()
