import userModel from "../../../../db/Models/user.model.js"
import postModel from "../../../../db/Models/post.model.js"



//NOTE - 1- add post (make sure that user already exist)
export const addPost = async (req, res) => {
    const { title, content, userID } = req.body;
    const user = await userModel.findOne({ _id: userID })

    if (user) {
        const post = await postModel.create({ title, content, userID });
        console.log(post);
        if (post) {
            user.posts.push(post._id);
            await user.save();
            res.json({ Message: "Post Added Successfully.", post })
        }
    }
    else {
        res.json({ Message: "User is not found " });
    }
}


//NOTE - 2- delete post (post creator only )
export const deletePost = async (req, res) => {
    const { postID } = req.body; // Assuming you have postID in the request body

    try {
        const user = await userModel.findOne({ posts: postID });

        if (!user) {
            return res.json({ Message: "User not found for the given post." });
        }

        const deletedPost = await postModel.findByIdAndDelete(postID);
        if (deletedPost) {
            // Find the user associated with the deleted post
            user.posts = user.posts.filter(post => post.toString() !== postID.toString());
            await user.save();
            return res.json({ Message: "Post Deleted Successfully.", deletedPost });
        } else {
            return res.json({ Message: "Post not found." });
        }
    } catch (error) {
        res.status(500).json({ Message: "Error deleting post." });
    }
}

//NOTE - 3- update post (post owner only)
export const updatePost = async (req, res) => {

    const { title, content, userID } = req.body;

    const user = await userModel.findOne({ _id: userID })
    if (user) {
        const posts = await postModel.find({ userID })
        console.log(posts.length);
        if (posts.length) {
            const updatedPost = await postModel.updateOne({ title, content })
            if (updatedPost.modifiedCount) {
                res.json({ Message: "Post Updated Successfully.", updatePost })
            }

        }
        else {
            res.json({ Message: "User Doesn't have Any posts." })
        }
    } else {
        res.json({ Message: "User is not found " });

    }
}

//NOTE - 4- get all posts
export const getAllPosts = async (req, res) => {

    const posts = await postModel.find()
    res.json({ posts })
}

//NOTE - 5- get all posts with their owners informaion (using populate)
export const getAllPostsWithInfoUsers = async (req, res) => {
    //NOTE - remove the password and the version 
    const posts = await postModel.find().populate({ path: "userID", select: "-password -__v" })
    res.json({ posts })
}

//NOTE - 6-sort posts descending (By date)
export const sortPostsDesByDate = async (req, res) => {

    const posts = await postModel.find().sort({ "createdAt": 'desc' })
    res.json({ posts })
}