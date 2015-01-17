use tutorials

db.users.find().pretty()
// {
//	"_id" : ObjectId("54ba66320d5babe31838a9fc"),
//	"name" : "richard",
//	"email" : {
//		"work" : "richard@10gen.com",
//		"personal" : "kreuten@example.com"
//	}
//}

db.users.find({"email.work" : "richard@10gen.com"})
