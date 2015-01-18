db.users.insert({name: "Ada", city_of_birth: "Fuzhou"})
db.users.insert({name: "Bob", city_of_birth: "Chicago", favorite_color: "red"})
var j = db.users.findOne({name: "Ada"})
j.favorite_color = "blue"
db.users.save(j)