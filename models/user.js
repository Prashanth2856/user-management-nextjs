import { Schema, model } from "mongoose";

let User;

try {
  // Check if the model already exists
  User = model("users");
} catch (error) {
  // If the model doesn't exist, define it
  const userSchema = new Schema(
    {
      name: { type: String, required: [true, "Name is required"] },
      email: {
        type: String,
        required: [true, "Email is required"],
        unique: [true, "Email already exists"],
      },
      mobile: { type: String },
    }
  );

  User = model("users", userSchema);
}

export default User;
