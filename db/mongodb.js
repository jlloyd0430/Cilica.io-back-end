import mongoose from "mongoose";
import "dotenv";
import { config } from "dotenv";
config();
mongoose.set("strictQuery", true);

function connectToMongoDb() {
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
      console.log("MongoDB Connected");
    })
    .catch((error) => {
      console.log(`DB connection failed: ${error}`);
    });
}

export default connectToMongoDb;
