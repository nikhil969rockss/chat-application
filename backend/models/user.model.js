import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: [true, "Email is required"],
            trim: true,
            maxLength: 100,
            unique: true,
        },
        password: {
            type: String,
            required: [true, "Password is required"],
            trim: true,
        },
        firstName: {
            type: String,

            trim: true,
        },
        lastName: {
            type: String,

            trim: true,
        },
        image: {
            type: String,

            trim: true,
        },
        color: {
            type: Number,
        },
        profileSetup: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true },
);

// pre hook function
userSchema.pre("save", async function hashPassword(next) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);

    next();
});
const User = mongoose.model("User", userSchema);

export default User;
