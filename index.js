import express from 'express'
import { connection } from './db/Connection.js'
import userRouter from './src/modules/user/user.routes.js'
import postRouter from './src/modules/post/post.routes.js'
const app = express();
const port = 3000
connection();
app.use(express.json());
app.use("/user", userRouter);
app.use("/post", postRouter);
app.listen(port, () => console.log(`Server is  listening on port ${port}!`))