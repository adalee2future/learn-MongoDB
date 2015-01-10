import bottle

@bottle.route('/')
def home_page():
    mythings = ['apple', 'orange', 'banana', 'peach']
#   return bottle.template('hello_world2', username = "Ada", things = mythings)
    return bottle.template('hello_world2', {"username":  "Ada", "things": mythings})
    
    
bottle.debug(True)
bottle.run(host = 'localhost', port = 8080)