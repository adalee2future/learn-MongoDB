db.zips.find()
//{ "_id" : "35045", "city" : "CLANTON", "loc" : [ -86.642472, 32.835532 ], "pop" : 13990, "state" : "AL" }
//{ "_id" : "94301", "city" : "PALO ALTO", "loc" : [ -122.149685, 37.444324 ], "pop" : 15965, "state" : "CA" }
//{ "_id" : "94304", "city" : "PALO ALTO", "loc" : [ -122.184234, 37.433424 ], "pop" : 1835, "state" : "CA" }
//{ "_id" : "94306", "city" : "PALO ALTO", "loc" : [ -122.127375, 37.418009 ], "pop" : 24309, "state" : "CA" }
//{ "_id" : "35004", "city" : "ACMAR", "loc" : [ -86.51557, 33.584132 ], "pop" : 6055, "state" : "AL" }

db.zips.aggregate([
    {$match:
      {
        $or : [{state : "CA"}, {state : "AL"}]
      }
    },
    {$group:
      {
        _id: "$city",
        population: {$sum: "$pop"},
      } 
    },
    {$out : 'results'}
])

db.results.find()
//{ "_id" : "ACMAR", "population" : 6055 }
//{ "_id" : "PALO ALTO", "population" : 42109 }
//{ "_id" : "CLANTON", "population" : 13990 }
