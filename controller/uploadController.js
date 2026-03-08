const Post = require("../models/Post")

exports.uploadPost = async(req,res)=>{

 const post = new Post({
  userId:req.body.userId,
  caption:req.body.caption,
  mediaUrl:req.body.mediaUrl
 })

 await post.save()

 res.json(post)

}
