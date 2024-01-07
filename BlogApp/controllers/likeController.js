const Post = require("../models/postModel");
const Like = require("../models/likeModel");


exports.likePost = async (req, res) => {
    try {
        const {post, user} = req.body;
        const like = new Like({
            post, user,
        });

        const savedlike = await like.save();

        const updatePost = await Post.findByIdAndUpdate(post, {$push: {like: savedlike._id}}, {new:true})
                                                        .populate("likes")
                                                        .exec();

       res.json({
        post:updatePost,
       });
    }
    catch(error) { 
        return res.status(400).json({
            error: "Error while Liking post",
        });
    }
}

exports.unlikePost = async (req, res) => {
    try {
        const {post, like} = req.body;

        const deleteLike = await Like.findOneAndDelete( {post:post, _id:like});

        const updatePost = await Post.findByIdAndUpdate(post, 
                                                        {$pull: {likes: deleteLike._id}}, {new:true}).exec();
    }
    catch(error) { 
        return res.status(400).json({
            error: "Error while Liking post",
        });
    }
}

exports.dummyLink = (req,res) => {
    res.send("This is your Dummy Page");
};