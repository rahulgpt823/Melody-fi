import { Router } from "express";
import { UserSchema, UserModel } from "../model/user_model.js";
import bcrypt from "bcrypt";
import { getToken } from "../util/generate_token_util.js";
import mongoose from "mongoose";
import passport from 'passport';
import { loginController } from "../controller/login_controller.js";

const platformRouter = new Router();

platformRouter.post("/login", loginController);

platformRouter.post("/signup",async (req, res, next) => {
  //My req.body will be of the format {email, password,firstname, lastname, dob,username}
  const { email, password, firstname, lastname, DOB, username } = req.body;

  // Validation : Does user exist : if yes, throw error
  const user = await UserModel.findOne({
    email: email,
  });
  if (user) {
    return res
      .status(403)
      .json({
        Error: "A user already with this mail exist , kindly check the maill",
      });
  }
  // create a new user in Db
  else {
    // we convert the password to an HASH before storing that in db
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUserData = {
      email,
      password: hashedPassword,
      firstname,
      lastname,
      DOB,
      username,
    };
    const newUser = await UserModel.create({
      firstName: firstname,
      lastName: lastname,
      userName: username,
      email: email,
      DOB: DOB,
      password: hashedPassword,
    });
    //Step 4: We want to create a token to return to the user
    //get token is a util function
    const token = await getToken(newUser);

    // step 5 : return the result to the user
    const userToReturn = { ...newUser.toJSON(), token };
    //we
    delete userToReturn.password;
    return res.status(200).json(userToReturn);
  }
});

export default platformRouter;
