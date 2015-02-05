db.grades.find( { } , { _id : 0 } )
//{ "class" : "Math", "student" : "123", "score" : 3 }
//{ "class" : "CS", "student" : "234", "score" : 5 }
//{ "class" : "Writting", "student" : "123", "score" : 4 }
//{ "class" : "Writting", "student" : "123", "score" : 5 }
//{ "class" : "Math", "student" : "123", "score" : 3.5 }
//{ "class" : "CS", "student" : "234", "score" : 4 }
//{ "class" : "Math", "student" : "234", "score" : 3.5 }
//{ "class" : "Math", "student" : "234", "score" : 4 }

// one group
db.grades.aggregate( [ { $group : { _id : { student : "$student" , class : "$class"} ,
                                    average : { $avg : "$score"}}}])
//{ "_id" : { "student" : "234", "class" : "Math" }, "average" : 3.75 }
//{ "_id" : { "student" : "123", "class" : "Writting" }, "average" : 4.5 }
//{ "_id" : { "student" : "234", "class" : "CS" }, "average" : 4.5 }
//{ "_id" : { "student" : "123", "class" : "Math" }, "average" : 3.25 }

// double group
db.grades.aggregate( [ { $group : { _id : { student : "$student" , class : "$class"} ,average : { $avg : "$score"}}} ,
                       { $group : {_id : "$_id.class", average : {$avg : "$average"}}} ])
//{ "_id" : "CS", "average" : 4.5 }
//{ "_id" : "Writting", "average" : 4.5 }
//{ "_id" : "Math", "average" : 3.5 }
