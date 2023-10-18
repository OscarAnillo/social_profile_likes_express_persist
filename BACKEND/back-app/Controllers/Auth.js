import User from "../Model/User.js";

/* Login */
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email: email, password: password })
        if(!user){
            return res.status(404).json({ message: "User not found"})
        }
        res.status(200).json(user)
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
}

/* Register */
export const register = async (req, res) => {
    try {
        const {
            firstName,
            lastName,
            email,
            password,
            occupation,
            location,
            description,
            picturePath
        } = req.body;

        const newUser = new User({
            firstName,
            lastName,
            email,
            password,
            occupation,
            location,
            description,
            picturePath
        });
        await newUser.save()
        res.status(200).json(newUser)
    } catch (err) {
        res.status(401).json({ message: err.message })
    }
}