import mongoose from "mongoose";

// schema
export const UserSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: false },
  email: { type: String, required: true, index: true },
  userName: { type: String, required: true },
  DOB: { type: String, required: true },
  password: { type: String, required: true },
});

//model
export const UserModel = mongoose.model("User", UserSchema, "user");

export default { UserSchema, UserModel };
