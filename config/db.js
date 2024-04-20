import mongoose from "mongoose";



const connect = async () => {
  let connected = false;
  mongoose.set("strictQuery", true);
  // If the connection already exists
  if (connected) {
    // console.log("db already connected");
    return;
  }
  // connect to the database
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    connected = true;
    // console.log("db connected successfully");
  } catch (error) {
    console.log(error);
  }
};

export default connect;
