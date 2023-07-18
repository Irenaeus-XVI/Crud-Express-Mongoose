import mongoose from "mongoose";

//NOTE - userSchema
const postSchema = new mongoose.Schema({
    title: String,
    content: String,
    userID: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    }
}, {
    timestamps: true
});



const postModel = mongoose.model("Post", postSchema);

export default postModel;