db.names.remove({})

db.names.save({name : "Ada"})
var j = db.names.findOne()
j
j.name = "Bob"
db.names.save(j)
db.names.find()

db.names.save