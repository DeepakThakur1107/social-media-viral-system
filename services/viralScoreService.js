function calculateViralScore(post){

 const score =
 (post.likes * 2) +
 (post.comments * 3) +
 (post.shares * 5) +
 (post.watchTime * 4)

 return score
}

module.exports = calculateViralScore
