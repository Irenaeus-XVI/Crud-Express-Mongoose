import express from 'express';
import { addPost, deletePost, updatePost, getAllPosts, getAllPostsWithInfoUsers, sortPostsDesByDate } from './controller/post.controller.js';
const router = express.Router();





router.post('/addPost', addPost);
router.delete('/deletePost', deletePost);
router.put('/updatePost', updatePost);
router.get('/getAllPosts', getAllPosts);
router.get('/getAllPostsWithInfoUsers', getAllPostsWithInfoUsers);
router.get('/sortPostsDesByDate', sortPostsDesByDate);



export default router;