const Post = require("../models/Post")

exports.likePost = async(req,res)=>{

 const post = await Post.findById(req.params.id)

 post.likes += 1

 await post.save()

 res.json(post)

}
