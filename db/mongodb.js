import mongoose from "mongoose";
import "dotenv";
// import { config } from "dotenv";
mongoose.set("strictQuery", false);

function connectToMongoDb() {
  mongoose
    .config()
    .connect(process.env.MONGODB_URI)
    .then(() => {
      console.log("MongoDB Connected");
    })
    .catch((error) => {
      console.log(`DB connection failed: ${error}`);
    });
}

export default connectToMongoDb;
