use pcat

db.products.find({}, {name:1, price:1,_id:0}).sort({price:1})

// only sort where the price exists
db.products.find({price: {$exists:true}}, {name:1, price:1,_id:0}).sort({price:1})

// descending order
db.products.find({price: {$exists:true}}, {name:1, price:1,_id:0}).sort({price:-1})
