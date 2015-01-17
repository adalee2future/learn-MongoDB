use tutorials

// $gt, strictly greater than
db.scores.find({score: {$gt: 95}})
// $lte, less than or equal to 
db.scores.find({score: {$gt: 95, $lte: 98}, type: "essay"})
