db.students.find({}, {_id : 0})
//{ "sID" : 123, "sName" : "Amy", "GPA" : 3.9, "sizeHS" : 1000 }
//{ "sID" : 234, "sName" : "Bob", "GPA" : 3.6, "sizeHS" : 1500 }
//{ "sID" : 345, "sName" : "Craig", "GPA" : 3.5, "sizeHS" : 500 }
//{ "sID" : 456, "sName" : "Doris", "GPA" : 3.9, "sizeHS" : 1000 }
//{ "sID" : 567, "sName" : "Edward", "GPA" : 2.9, "sizeHS" : 2000 }
//{ "sID" : 678, "sName" : "Fay", "GPA" : 3.8, "sizeHS" : 200 }
//{ "sID" : 789, "sName" : "Gary", "GPA" : 3.4, "sizeHS" : 800 }
//{ "sID" : 987, "sName" : "Helen", "GPA" : 3.7, "sizeHS" : 800 }
//{ "sID" : 876, "sName" : "Irene", "GPA" : 3.9, "sizeHS" : 400 }
//{ "sID" : 765, "sName" : "Jay", "GPA" : 2.9, "sizeHS" : 400 }
//{ "sID" : 654, "sName" : "Amy", "GPA" : 3.9, "sizeHS" : 1000 }
//{ "sID" : 543, "sName" : "Craig", "GPA" : 3.4, "sizeHS" : 2000 }

db.students.aggregate([
    {$project:
      {
        _id : 0,
        student: "$sID",
        details : {name: "$sName",
                   GPA: {$multiply: ["$GPA", 10]}
                  },
        sizeHS: "$sizeHS"
      }
    }
])

//{ "sizeHS" : 1000, "student" : 123, "details" : { "name" : "Amy", "GPA" : 39 } }
//{ "sizeHS" : 1500, "student" : 234, "details" : { "name" : "Bob", "GPA" : 36 } }
//{ "sizeHS" : 500, "student" : 345, "details" : { "name" : "Craig", "GPA" : 35 } }
//{ "sizeHS" : 1000, "student" : 456, "details" : { "name" : "Doris", "GPA" : 39 } }
//{ "sizeHS" : 2000, "student" : 567, "details" : { "name" : "Edward", "GPA" : 29 } }
//{ "sizeHS" : 200, "student" : 678, "details" : { "name" : "Fay", "GPA" : 38 } }
//{ "sizeHS" : 800, "student" : 789, "details" : { "name" : "Gary", "GPA" : 34 } }
//{ "sizeHS" : 800, "student" : 987, "details" : { "name" : "Helen", "GPA" : 37 } }
//{ "sizeHS" : 400, "student" : 876, "details" : { "name" : "Irene", "GPA" : 39 } }
//{ "sizeHS" : 400, "student" : 765, "details" : { "name" : "Jay", "GPA" : 29 } }
//{ "sizeHS" : 1000, "student" : 654, "details" : { "name" : "Amy", "GPA" : 39 } }
//{ "sizeHS" : 2000, "student" : 543, "details" : { "name" : "Craig", "GPA" : 34 } }

