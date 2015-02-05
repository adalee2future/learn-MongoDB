db.sentences.find( { } , { _id : 0 } )  //index words
//{ "words" : "Cat tree ruby." }
//{ "words" : "Cat tree obsidian." }
//{ "words" : "Cat tree granite." }
//{ "words" : "Cat thrub ruby." }
//{ "words" : "Cat thrub obsidian." }
//{ "words" : "Cat thrub granite." }
//{ "words" : "Cat moss granite." }
//{ "words" : "Cat moss obsidian." }
//{ "words" : "Cat moss ruby." }
//{ "words" : "dog tree ruby." }
//{ "words" : "dog tree obsidian." }
//{ "words" : "dog tree granite." }
//{ "words" : "dog shrub ruby." }
//{ "words" : "dog shrub obsidian." }
//{ "words" : "dog shrub granite." }
//{ "words" : "dog moss ruby." }
//{ "words" : "dog moss obsidian." }
//{ "words" : "dog moss granite." }
//{ "words" : "rat tree ruby." }
//{ "words" : "rat tree obsidian." }
//Type "it" for more
it
//{ "words" : "rat tree granite." }
//{ "words" : "rat shrub ruby." }
//{ "words" : "rat shrub obsidian." }
//{ "words" : "rat shrub granite." }
//{ "words" : "rat moss ruby." }
//{ "words" : "rat moss obsidian." }
//{ "words" : "rat moss granite." }

db.sentences.aggregate([
    {$match:
        { $text: { $search: "tree rat" } }
    },
    {$project:
        {words: 1, _id: 0}
    }
])
//{ "words" : "rat moss ruby." }
//{ "words" : "Cat tree obsidian." }
//{ "words" : "dog tree obsidian." }
//{ "words" : "rat moss granite." }
//{ "words" : "rat tree obsidian." }
//{ "words" : "rat shrub ruby." }
//{ "words" : "rat shrub granite." }
//{ "words" : "Cat tree ruby." }
//{ "words" : "dog tree ruby." }
//{ "words" : "Cat tree granite." }
//{ "words" : "rat moss obsidian." }
//{ "words" : "rat tree ruby." }
//{ "words" : "dog tree granite." }
//{ "words" : "rat tree granite." }
//{ "words" : "rat shrub obsidian." }

db.sentences.aggregate([
    {$match:
        { $text: { $search: "tree rat" } }
    },
    {$sort:
        { score: { $meta: "textScore" } }
    },
    {$project:
        {words: 1, _id: 0}
    }
])
//{ "words" : "rat tree obsidian." }
//{ "words" : "rat tree ruby." }
//{ "words" : "rat tree granite." }
//{ "words" : "rat moss ruby." }
//{ "words" : "Cat tree obsidian." }
//{ "words" : "dog tree obsidian." }
//{ "words" : "rat moss granite." }
//{ "words" : "rat shrub ruby." }
//{ "words" : "rat shrub granite." }
//{ "words" : "Cat tree ruby." }
//{ "words" : "dog tree ruby." }
//{ "words" : "Cat tree granite." }
//{ "words" : "rat moss obsidian." }
//{ "words" : "dog tree granite." }
//{ "words" : "rat shrub obsidian." }


