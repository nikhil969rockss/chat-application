import User from "../models/user.model.js";
import { checkEmail } from "../utils/checkEmail.js";
import { generateToken } from "../utils/generateToken.js";

export const signup = async (req, res) => {
    try {
        const { email, password } = req.body;

        const existingEmail = await User.findOne({ email });
        if (existingEmail) {
            return res.status(400).json({
                error: "Email Id is already in use",
            });
        }

        if (!email || !password) {
            return res.status(404).json({
                error: "Email and password are required",
            });
        }
        const isValidEmail = checkEmail(email);
        if (!isValidEmail) {
            return res.status(404).json({
                error: "Please Enter a valid Email address",
            });
        }

        if (password.length < 6) {
            return res.status(404).json({
                error: "Password must have at least 6 character",
            });
        }
        const user = new User({ email, password });
        generateToken(user, res);

        await user.save();

        return res.status(201).json({
            message: "User created successfully",
            data: user,
        });
    } catch (error) {
        console.log(`Error in signup controller ${error.message}`);

        return res.status(500).json({
            error: "Internal Server Error",
        });
    }
};
