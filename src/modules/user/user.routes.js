import express from 'express';
import { getAllUser, signUp, signIn, updateUser, deleteUser, searchByNameAndAge, searchAgeBetween,getUserProfileWithPosts } from './controller/user.controller.js';
const router = express.Router();





router.get("/", (req, res) => {
    res.json({ Message: "Hello from user routes " })
})

router.get("/getAllUsers", getAllUser);
router.get("/searchByNameAndAge", searchByNameAndAge);
router.get("/searchAgeBetween", searchAgeBetween);
router.post("/signUp", signUp);
router.post("/signIn", signIn);
router.put("/updateUser", updateUser);
router.delete("/deleteUser", deleteUser);
router.get("/getUserProfileWithPosts", getUserProfileWithPosts);


export default router;