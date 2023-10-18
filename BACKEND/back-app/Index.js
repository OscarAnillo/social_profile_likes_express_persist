import express from 'express';
import dotenv from 'dotenv';
import authRoute from './Routes/Auth.js'
import userRoute from './Routes/User.js'
import postRoute from './Routes/Post.js'
import mongoose from 'mongoose';
import cors from 'cors';
dotenv.config()

const app = express();
const PORT = process.env.PORT || 3005;

mongoose.connect(process.env.MONGO_URL)
.then(() => {
    console.log("DB Connected")
}).catch(console.log);

app.use(cors());
app.use(express.json());

app.use("/auth", authRoute);
app.use("/users", userRoute);
app.use("/posts", postRoute);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));