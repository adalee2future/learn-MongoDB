// create a couple documents
db.users.insert({name: 'Johnny', languages: ['ruby', 'c']})
db.users.insert({name: 'Sue', languages: ['scala', 'lisp']})

// confirm they were saved
db.users.find()

// update Johnny's names and languages
db.users.update({name: 'Johnny'}, {name: 'Cash', languages: ['English']})

// update Sue's languages without overweiting them
db.users.update({name: 'Sue'}, {$addToSet: {languages: 'ruby'}})

// add a new field to Cash
db.users.update({name: 'Cash'}, {$set: {age: 50}})

// push and pull items from arrays
db.users.update({name: 'Sue'}, {$push: {languages: 'ruby'}})
db.users.update({name: 'Sue'}, {$pull: {languages: 'scala'}})

// remove Sue
db.users.remove({name: 'Sue'})
// remove all
db.users.remove({})
