// unordered bulk example
var bulk = db.items.initializeUnorderedBulkOp()

bulk.insert({item : "abc123", defaltQty: 100, status: "A", points: 100});
bulk.insert({item: "ijk123", defaultQty: 200, status: "A", points: 200});
bulk.insert({item: "mop123", defaultQty: 00, status: "P", points: 0});

bulk.execute()
db.items.find()
// { "_id" : ObjectId("54b9fb52d70cf0fbe1903c90"), "item" : "abc123", "defaltQty" : 100, "status" : "A", "points" : 100 }
// { "_id" : ObjectId("54b9fb52d70cf0fbe1903c91"), "item" : "ijk123", "defaultQty" : 200, "status" : "A", "points" : 200 }
// { "_id" : ObjectId("54b9fb52d70cf0fbe1903c92"), "item" : "mop123", "defaultQty" : 0, "status" : "P", "points" : 0 }

// ordered bulk example
var b = db.items.initializeOrderedBulkOp()

b.find({item: "abc123"}).remove()
b.find({item: "mop123"}).remove()
b.find({item: "ijk123"}).update({$inc : {points:1}})
b.execute()

db.items.find()
// { "_id" : ObjectId("54b9fd52d70cf0fbe1903c94"), "item" : "ijk123", "defaultQty" : 200, "status" : "A", "points" : 201 }
