use test

db.sentences.find({}, {_id : 0})
// { "words" : "Cat tree ruby." }
// { "words" : "Cat tree obsidian." }
// { "words" : "Cat tree granite." }
// { "words" : "Cat thrub ruby." }
// { "words" : "Cat thrub obsidian." }
// { "words" : "Cat thrub granite." }
// { "words" : "Cat moss granite." }
// { "words" : "Cat moss obsidian." }
// { "words" : "Cat moss ruby." }
// { "words" : "dog tree ruby." }
// { "words" : "dog tree obsidian." }
// { "words" : "dog tree granite." }
// { "words" : "dog shrub ruby." }
// { "words" : "dog shrub obsidian." }
// { "words" : "dog shrub granite." }
// { "words" : "dog moss ruby." }
// { "words" : "dog moss obsidian." }
// { "words" : "dog moss granite." }
// { "words" : "rat tree ruby." }
// { "words" : "rat tree obsidian." }
// Type "it" for more
it
// { "words" : "rat tree granite." }
// { "words" : "rat shrub ruby." }
// { "words" : "rat shrub obsidian." }
// { "words" : "rat shrub granite." }
// { "words" : "rat moss ruby." }
// { "words" : "rat moss obsidian." }
// { "words" : "rat moss granite." }
it
// no cursor

// regular expressions
db.sentences.find({words: /rat/})
// { "_id" : ObjectId("54c0ef83796e258876b0b471"), "words" : "rat tree ruby." }
// { "_id" : ObjectId("54c0ef8c796e258876b0b472"), "words" : "rat tree obsidian." }
// { "_id" : ObjectId("54c0efbd796e258876b0b473"), "words" : "rat tree granite." }
// { "_id" : ObjectId("54c0efc5796e258876b0b474"), "words" : "rat shrub ruby." }
// { "_id" : ObjectId("54c0efcd796e258876b0b475"), "words" : "rat shrub obsidian." }
// { "_id" : ObjectId("54c0efe2796e258876b0b476"), "words" : "rat shrub granite." }
// { "_id" : ObjectId("54c0efeb796e258876b0b477"), "words" : "rat moss ruby." }
// { "_id" : ObjectId("54c0eff4796e258876b0b478"), "words" : "rat moss obsidian." }
// { "_id" : ObjectId("54c0effb796e258876b0b479"), "words" : "rat moss granite." }

// text indexes
db.sentences.ensureIndex({words : "text"})

db.sentences.find( { $text : { $search : "cat" } } )
// { "_id" : ObjectId("54c0eedf796e258876b0b465"), "words" : "Cat moss granite." }
// { "_id" : ObjectId("54c0eeb0796e258876b0b462"), "words" : "Cat thrub ruby." }
// { "_id" : ObjectId("54c0ee7c796e258876b0b45f"), "words" : "Cat tree ruby." }
// { "_id" : ObjectId("54c0eeec796e258876b0b467"), "words" : "Cat moss ruby." }
// { "_id" : ObjectId("54c0eed2796e258876b0b464"), "words" : "Cat thrub granite." }
// { "_id" : ObjectId("54c0eea3796e258876b0b461"), "words" : "Cat tree granite." }
// { "_id" : ObjectId("54c0eee6796e258876b0b466"), "words" : "Cat moss obsidian." }
// { "_id" : ObjectId("54c0eec6796e258876b0b463"), "words" : "Cat thrub obsidian." }

db.sentences.find( { $text : { $search : "Trees" } } )
// { "_id" : ObjectId("54c0eef9796e258876b0b468"), "words" : "dog tree ruby." }
// { "_id" : ObjectId("54c0efbd796e258876b0b473"), "words" : "rat tree granite." }
// { "_id" : ObjectId("54c0ee7c796e258876b0b45f"), "words" : "Cat tree ruby." }
// { "_id" : ObjectId("54c0ef12796e258876b0b46a"), "words" : "dog tree granite." }
// { "_id" : ObjectId("54c0ef8c796e258876b0b472"), "words" : "rat tree obsidian." }
// { "_id" : ObjectId("54c0eea3796e258876b0b461"), "words" : "Cat tree granite." }
// { "_id" : ObjectId("54c0ef05796e258876b0b469"), "words" : "dog tree obsidian." }
// { "_id" : ObjectId("54c0ef83796e258876b0b471"), "words" : "rat tree ruby." }
// { "_id" : ObjectId("54c0ee96796e258876b0b460"), "words" : "Cat tree obsidian." }

db.sentences.find( { $text : { $search : "Trees cat" } } , { score : { $meta : "textScore"}}).sort( { score : {$meta : "textScore" } } )
// { "_id" : ObjectId("54c0ee7c796e258876b0b45f"), "words" : "Cat tree ruby.", "score" : 1.3333333333333333 }
// { "_id" : ObjectId("54c0ee96796e258876b0b460"), "words" : "Cat tree obsidian.", "score" : 1.3333333333333333 }
// { "_id" : ObjectId("54c0eea3796e258876b0b461"), "words" : "Cat tree granite.", "score" : 1.3333333333333333 }
// { "_id" : ObjectId("54c0eeb0796e258876b0b462"), "words" : "Cat thrub ruby.", "score" : 0.6666666666666666 }
// { "_id" : ObjectId("54c0eec6796e258876b0b463"), "words" : "Cat thrub obsidian.", "score" : 0.6666666666666666 }
// { "_id" : ObjectId("54c0eed2796e258876b0b464"), "words" : "Cat thrub granite.", "score" : 0.6666666666666666 }
// { "_id" : ObjectId("54c0eedf796e258876b0b465"), "words" : "Cat moss granite.", "score" : 0.6666666666666666 }
// { "_id" : ObjectId("54c0eee6796e258876b0b466"), "words" : "Cat moss obsidian.", "score" : 0.6666666666666666 }
// { "_id" : ObjectId("54c0eeec796e258876b0b467"), "words" : "Cat moss ruby.", "score" : 0.6666666666666666 }
// { "_id" : ObjectId("54c0eef9796e258876b0b468"), "words" : "dog tree ruby.", "score" : 0.6666666666666666 }
// { "_id" : ObjectId("54c0ef05796e258876b0b469"), "words" : "dog tree obsidian.", "score" : 0.6666666666666666 }
// { "_id" : ObjectId("54c0ef12796e258876b0b46a"), "words" : "dog tree granite.", "score" : 0.6666666666666666 }
// { "_id" : ObjectId("54c0ef83796e258876b0b471"), "words" : "rat tree ruby.", "score" : 0.6666666666666666 }
// { "_id" : ObjectId("54c0ef8c796e258876b0b472"), "words" : "rat tree obsidian.", "score" : 0.6666666666666666 }
// { "_id" : ObjectId("54c0efbd796e258876b0b473"), "words" : "rat tree granite.", "score" : 0.6666666666666666 }
db.sentences.dropIndexes()
// {
//	"nIndexesWas" : 2,
//	"msg" : "non-_id indexes dropped for collection",
//	"ok" : 1
//}
db.sentences.ensureIndex({words: "text"}, {default_language : "english"})
// {
//	"createdCollectionAutomatically" : false,
//	"numIndexesBefore" : 1,
//	"numIndexesAfter" : 2,
//	"ok" : 1
// }
