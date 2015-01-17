use pcat
// a new collection
t = pcat.pageviews

t.update({_id: "sports/football"}, {$inc : {views : 1}}, true)
t.update({_id: "sports/football"}, {$inc : {views : 1}}, true)
t.update({_id: "sports/football"}, {$inc : {views : 1}}, true)
t.update({_id: "sports/football"}, {$inc : {views : 1}}, true)

t.update({_id: "sports/tennis"}, {$inc : {views : 1}}, true)
t.update({_id: "sports/tennis"}, {$inc : {views : 1}}, true)

t.update({_id : "/sports/tennis"}, {$inc : {clicks : 1}}, true)
t.update({_id : "/sports/tennis"}, {$inc : {clicks : 1}}, true)

t.find()
// { "_id" : "sports/football", "views" : 5 }
// { "_id" : "sports/tennis", "views" : 2 }
// { "_id" : "/sports/tennis", "clicks" : 2 }
