touch keyfile
chmod 600 keyfile
openssl rand -base64 60
//yc1RxU7QquYsk40COtmxvW7FjARu/mq772iTPZq8JXPhpUZ6wZ44BsxMJhkAWzEN
//RYmJVpBUPqA33Ltv

openssl rand -base64 60 >> keyfile
cat keyfile
//DoXSm1+CR9bOx1r9oekZA8yPMhaO6gl3Nq0aSd1qCyQ4Bv66yZ6DUz3qg0QGPIqF
//cBPlQ2WOFps5Nhi3

mongod --dbpath data --auth --replSet z --keyFile keyfile
// first client
mongo
rs.initiate()
use admin

// second mongod
mongod --port 27002 --dbpath 2 --auth --keyFile keyfile --replSet z




