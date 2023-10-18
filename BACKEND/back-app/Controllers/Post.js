import Post from "../Model/Post.js";
import User from "../Model/User.js";

/* Create Post */
export const createPost = async (req, res) => {
    try {
        const { userId, description, picturePath } = req.body;
        const user = await User.findById(userId);
        
        const newPost = new Post({
            userId,
            description,
            picturePath,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            location: user.location,
            userPicturePath: user.picturePath,
            likes: {},
            comments: []
        });
        await newPost.save();
        const posts = await Post.find();
        res.status(201).json(posts)
    } catch (err) {
        res.status(401).json({ message: err.message})
    }
}


/* Read Posts */
export const getAllPost = async (req, res) => {
    try {
        const posts = await Post.find();
        res.status(200).json(posts)
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
}

export const getAllUserPosts = async (req, res) => {
    try {
        const { userId } = req.params;
        const posts = await Post.find( userId );
        res.status(200).json(posts)
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
}

/* Update Likes */
export const updateLikes = async (req, res) => {
    try {

        const { id } = req.params;
        const { userId } = req.body;
    
        const post = await Post.findById(id);
        const isPostLiked = post.likes.get(userId);
    
        if(isPostLiked){
            post.likes.delete(userId)
        } else {
            post.likes.set(userId, true)
        }
    
        const updatedPost = await Post.findByIdAndUpdate(id, 
            { likes: post.likes},
            { new: true}
        );
            res.status(200).json(updatedPost)
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
}
