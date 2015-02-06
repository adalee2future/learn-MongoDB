db.stuff.find({},{_id : 0})
//{ "category" : "vegetable", "things" : [ "apple", "banana", "orange" ] }
//{ "category" : "clothing", "things" : [ "gloves", "pants", "coat" ] }

db.stuff.aggregate([
    {$unwind : "$things"},
    {$project : {category : 1, things : 1, _id : 0}},
    {$sort : {category : 1, things : 1}}
])
//{ "category" : "clothing", "things" : "coat" }
//{ "category" : "clothing", "things" : "gloves" }
//{ "category" : "clothing", "things" : "pants" }
//{ "category" : "vegetable", "things" : "apple" }
//{ "category" : "vegetable", "things" : "banana" }
//{ "category" : "vegetable", "things" : "orange" }
