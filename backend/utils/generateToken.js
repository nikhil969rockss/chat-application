import jwt from "jsonwebtoken";
export const generateToken = async (user, res) => {
    const token = await jwt.sign(
        { userId: user._id },
        process.env.JWT_SECRET_KEY,
    );
    res.cookie("jwtToken", token, {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        sameSite: "strict",
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development",
    });
};
