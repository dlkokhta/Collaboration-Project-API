import userRegistration from "../models/userRegistration.js";

import validateUser from "../schemas/add-user-schema.js";
import bcrypt from "bcrypt";

export const postUserRegistration = async (req, res) => {
  const userData = req.body;
  console.log(userData);

  try {
    const { error } = validateUser.validate(userData);

    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(userData.password, saltRounds);

    // let isAllFieldsFilled = Object.values(userData).every(
    //   (field) => field !== null && field !== undefined && field !== ""
    // );

    // Check uniqueness of username and email before saving to the database
    const existingUser = await userRegistration.findOne({
      $or: [{ username: userData.username }, { email: userData.email }],
    });

    if (existingUser) {
      return res.status(400).send("Username or email is already taken");
    }

    userData.password = hashedPassword;

    // Create a new user document using the userRegistration model
    const newUser = new userRegistration(userData);

    // Save the new user document to the database
    await newUser.save();

    console.log(newUser);
    res.send("User registration successful");
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while saving user registration");
  }
};
