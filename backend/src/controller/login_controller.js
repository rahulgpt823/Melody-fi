/**
 * To take the email and password as input argument
 * to validate if the email exist in the user collection
 * To return the token : autherizing user to access the further service
 */

import  UserModel from "../model/user_model.js";
import { getToken } from "../util/generate_token_util.js";
import bcrypt from "bcrypt";


// Step 1:

export const loginController = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  //Step 2 : do a findOne on the user model to check if the user exist

  /**
   *  The findOne function expects a query object as its parameter, but you're passing the email and password directly as arguments.
   * Model.findOne(conditions, [projection], [options], [callback])
   * The conditions parameter represents the criteria that the document must meet to be considered a match.
   * The projection parameter specifies which fields should be included or excluded from the returned document.E
   * Example, { name: 1, email: 1 } specifies that only the name and email fields
   * options parameter provides additional configuration for the query.
   * For example, { sort: { createdAt: -1 }, limit: 10 } sorts the results by the createdAt field in descending order and limits the result to 10 documents.
   */
  const validateUserExist = await UserModel.findOne({ email });
  if (validateUserExist) {
    // step 3 : to check if the password provided is correct or not , if not it will throw an error

    const isValidPassword = bcrypt.compare(
      validateUserExist.password,
      password,
    );
    // const userHashedPassword = bcrypt.hash(password,10); // we won't use this instead we can use bcrypt.password as it allows to directly compare the password
    // if(userHashedPassword === validateUserExist.password){
    if (isValidPassword) {
      const userToken = await getToken(validateUserExist);
      const userDetail = { ...validateUserExist.toJSON(), userToken };
      delete userDetail.password;
      console.log(
        `User already registerd and token generated to access the app.TOKEN : ${userToken}`,
      );
      return res.status(200).json(userDetail);
    } else {
      throw new Error("Invalid Credentials");
    }
  } else {
    return res
      .status(403)
      .send(`User not registerd. Kindly register to enjoy the music`);
  }
};
