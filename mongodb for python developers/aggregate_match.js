db.zips.find()
//{ "_id" : "35045", "city" : "CLANTON", "loc" : [ -86.642472, 32.835532 ], "pop" : 13990, "state" : "AL" }
//{ "_id" : "94301", "city" : "PALO ALTO", "loc" : [ -122.149685, 37.444324 ], "pop" : 15965, "state" : "CA" }
//{ "_id" : "94304", "city" : "PALO ALTO", "loc" : [ -122.184234, 37.433424 ], "pop" : 1835, "state" : "CA" }
//{ "_id" : "94306", "city" : "PALO ALTO", "loc" : [ -122.127375, 37.418009 ], "pop" : 24309, "state" : "CA" }
//{ "_id" : "35004", "city" : "ACMAR", "loc" : [ -86.51557, 33.584132 ], "pop" : 6055, "state" : "AL" }

db.zips.aggregate([
    {$match:
      {
        state : "CA"
      }
    }
])
//{ "_id" : "94301", "city" : "PALO ALTO", "loc" : [ -122.149685, 37.444324 ], "pop" : 15965, "state" : "CA" }
//{ "_id" : "94304", "city" : "PALO ALTO", "loc" : [ -122.184234, 37.433424 ], "pop" : 1835, "state" : "CA" }
//{ "_id" : "94306", "city" : "PALO ALTO", "loc" : [ -122.127375, 37.418009 ], "pop" : 24309, "state" : "CA" }
 
db.zips.aggregate([
    {$match:
      {
        state : "CA"
      }
    },
    {$group:
      {
        _id: "$city",
        population: {$sum: "$pop"},
        zip_codes: {$addToSet: "$_id"}
      } 
    }          
])
//{ "_id" : "PALO ALTO", "population" : 42109, "zip_codes" : [ "94306", "94304", "94301" ] }
