import mongoose from "mongoose";

//NOTE - userSchema
const userSchema = new mongoose.Schema({
    userName: String,
    email: String,
    password: String,
    age: Number,
    gender: String,
    phone: String,
    posts: [{ type: mongoose.Types.ObjectId, ref: "Post" }]//NOTE - make it array to store posts ids 1-many relation
}, {
    timestamps: true
});



const userModel = mongoose.model("User", userSchema);

export default userModel;