import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String
    },
    occupation: {
        type: String
    },
    location: {
        type: String
    },
    description: {
        type: String
    },
    picturePath: {
        type: String,
        default:""
    },
})

const User = mongoose.model("User", userSchema);
export default User;