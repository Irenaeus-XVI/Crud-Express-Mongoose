import postModel from "../../../../db/Models/post.model.js";
import userModel from "../../../../db/Models/user.model.js"
import bcrypt from "bcrypt";

//NOTE - 1-sign up ( email must be unique ) 
export const signUp = async (req, res) => {
    const { userName, email, password, age, gender, phone } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);
    const foundedUser = await userModel.findOne({ email });
    if (foundedUser) {
        res.json({ Message: "user Already Registered." });
    } else {
        const user = await userModel.insertMany({ userName, email, password: hashedPassword, age, gender, phone });
        res.json({ Message: "Register Completed", user });

    }
    console.log(foundedUser);
}
//NOTE - 2-sign in 
export const signIn = async (req, res) => {
    const { email, password } = req.body;

    const foundedUser = await userModel.findOne({ email });
    if (foundedUser) {
        const hashedPassword = bcrypt.compareSync(password, foundedUser.password);
        if (hashedPassword) {
            res.json({ Message: "Welcome." });
        }
        else {
            res.json({ Message: "Wrong Password." });

        }
    } else {
        res.json({ Message: "you have to register first." });

    }
    console.log(email, password);
}
//NOTE - 3-updateUser
export const updateUser = async (req, res) => {
    const { _id, userName } = req.body;
    const updatedUser = await userModel.findByIdAndUpdate(_id, { userName }, { new: true })
    if (updatedUser) {
        res.json({ Message: "User Updated Successfully.", updatedUser });
    } else {
        res.json({ Message: "User is not exist" });
    }
}
//NOTE - 4-delete user
export const deleteUser = async (req, res) => {
    const { _id } = req.body;

    const deletedUser = await userModel.deleteOne({ _id });
    if (deletedUser.deletedCount) {
        const postUser = await postModel.deleteMany({ userID: _id });
        console.log(postUser);
        res.json({ Message: "User Deleted Successfully." })
    } else {
        res.json({ Message: "User is not exist" });

    }



}
//NOTE - 5-search for user where his name start with "X" and age less than Y=>   (X,Y => variables)
export const searchByNameAndAge = async (req, res) => {

    const startedWith = 'X';
    const lessThan = 30;
    const user = await userModel.find({
        userName: { $regex: `^${startedWith}`, $options: 'i' },
        age: { $lt: lessThan }
    })

    if (user.length) {
        res.json({ Message: "user Founded.", user });

    } else {
        res.json({ Message: "No User Exist With This Specification." });

    }
}
//NOTE -  6-search for user where his age is between X and Y
export const searchAgeBetween = async (req, res) => {



    try {
        const start = 21;
        const end = 30;
        const user = await userModel.find({
            age: { $gte: start, $lte: end }
        })

        if (user.length) {
            res.json({ Message: "user Founded.", user });

        } else {
            res.json({ Message: "No User Exist With This Specification." });

        }
    } catch (err) {
        res.status(500).json({ Message: err });
    }

}
//NOTE - 7-get all user
export const getAllUser = async (req, res) => {

    const users = await userModel.find()
    if (users.length) {
        res.json({ Message: "users:", users })
    } else {
        res.json({ Message: "No Users Found:" })
    }
}

//NOTE - 8- get user profile with user posts(using populate)
export const getUserProfileWithPosts = async (req, res) => {
    const { _id } = req.body;

    try {
        const user = await userModel.findOne({ _id });
        if (!user) {
            res.json({ Message: "User is not found " });
        }

        const userPosts = await userModel.findOne({ _id }).select("-password -__v").populate({ path: "posts" });
        res.json({ userPosts });
    } catch (err) {
        res.json({ Error: err });
    }
};

