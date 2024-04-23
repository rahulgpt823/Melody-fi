import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
export const getToken = async (newUser) => {
  const token = jwt.sign({ _id: newUser._id }, "kQc");
  return token;
};
