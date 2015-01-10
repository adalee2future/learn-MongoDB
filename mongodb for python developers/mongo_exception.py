import sys
import pymongo

connection = pymongo.MongoClient("mongodb://localhost")

db = connection.test
users = db.users

doc = {'firstname': 'Ada', 'lastname': 'Lee'}
print doc
print "about to insert the document"

try: 
    users.insert(doc)
except:
    print "insert failed:", sys.exc_info()[0]

doc = {'firstname': 'Ada', 'lastname': 'Lee'}
print doc
print "insert again"

try: 
    users.insert(doc)
except:
    print "insert failed:", sys.exc_info()[0]
    
print doc