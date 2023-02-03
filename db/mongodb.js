import mongoose from "mongoose";
import "dotenv";
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
