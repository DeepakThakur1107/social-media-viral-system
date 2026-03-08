const mongoose = require("mongoose")

const PostSchema = new mongoose.Schema({

 userId: String,
 caption: String,
 mediaUrl: String,

 likes: { type:Number, default:0 },
 comments: { type:Number, default:0 },
 shares: { type:Number, default:0 },

 watchTime: { type:Number, default:0 },

 viralScore: { type:Number, default:0 },
 boostLevel: { type:Number, default:0 },

 createdAt:{
  type:Date,
  default:Date.now
 }

})

module.exports = mongoose.model("Post",PostSchema)
