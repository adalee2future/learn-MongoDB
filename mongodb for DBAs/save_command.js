use pcat    // switch to db pcat
t = db.test

t.find()
// { "_id" : ObjectId("54b8f25d25cf99245ee52f4b"), "x" : "hello", "y" : 123 }
// { "_id" : ObjectId("54b8f25f25cf99245ee52f4c"), "x" : "hello" }
// { "_id" : ObjectId("54b8f26225cf99245ee52f4d"), "x" : "hello" }
// { "_id" : 100, "x" : "hello world", "y" : 123 }
// { "_id" : 101, "x" : "hello" }

myobj = { "_id" : 100, "x" : "hello world", "y" : 123 }
myobj.y = 400
myobj
t.save(myobj)
t.find()
// { "_id" : ObjectId("54b8f25d25cf99245ee52f4b"), "x" : "hello", "y" : 123 }
// { "_id" : ObjectId("54b8f25f25cf99245ee52f4c"), "x" : "hello" }
// { "_id" : ObjectId("54b8f26225cf99245ee52f4d"), "x" : "hello" }
// { "_id" : 100, "x" : "hello world", "y" : 400 }
// { "_id" : 101, "x" : "hello" }

t.save
// function ( obj , opts ){
//    if ( obj == null )
//        throw "can't save a null";
//
//    if ( typeof( obj ) == "number" || typeof( obj) == "string" )
//        throw "can't save a number or string"
//
//    if ( typeof( obj._id ) == "undefined" ){
//        obj._id = new ObjectId();
//        return this.insert( obj , opts );
//    }
//    else {
//        return this.update( { _id : obj._id } , obj , Object.merge({ upsert:true }, opts));
//    }
//}