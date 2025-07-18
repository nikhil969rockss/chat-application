import mongoose from "mongoose";

async function connectToDb(callback) {
    try {
        const con = await mongoose.connect(process.env.DATABASE_URI);
        console.log(
            `connection to database established ${con.connection.host}`,
        );
        callback();
    } catch (error) {
        console.log(`Error in database connection ${error.message}`);
    }
}

export default connectToDb;
