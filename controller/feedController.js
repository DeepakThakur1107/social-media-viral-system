const Post = require("../models/Post")

exports.getFeed = async(req,res)=>{

 const posts = await Post.find()
 .sort({viralScore:-1})
 .limit(20)

 res.json(posts)

}
