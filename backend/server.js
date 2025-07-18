import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectToDb from "./db/connectToDb.js";

//route imports
import authRoutes from "./routes/auth.route.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(
    cors({
        origin: [process.env.ORIGIN],
        credentials: true,
    }),
);
app.use(cookieParser());

app.use(express.json()); // for body paring
app.use(express.urlencoded({ extended: true })); // for encoded form data parsing


//routes

app.use("/api/auth", authRoutes);

connectToDb(() => {
    app.listen(port, () => {
        console.log(
            `Server is listening on port ${port} http://localhost:${port}`,
        );
    });
});
