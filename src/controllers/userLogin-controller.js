import userRegistration from "../models/userRegistration.js";
import validateUser from "../schemas/add-user-schema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const postUserLogin = async (req, res) => {
  const userData = req.body;
  console.log(userData);

  try {
    const { error } = validateUser.validate(userData.email, userData.password);
    console.log("error!!!!!", error);

    // if (error) {
    //   return res.status(400).send(error.details[0].message);
    // }

    const existingUser = await userRegistration.findOne({
      $or: [{ email: userData.email }],
    });

    if (!existingUser) {
      return res.status(400).send("Email is not registered");
    }

    const isPasswordCorrect = await bcrypt.compare(
      userData.password,
      existingUser.password
    );

    const payload = {
      email: userData.email,
      userID: existingUser.userID
    };

    const token = jwt.sign({ payload }, process.env.SECRET_KEY, {
      expiresIn: 86400, // expires in 24 hours
    });

    if (!isPasswordCorrect) {
      return res.status(400).send({ error: "Username or password is wrong" });
    }
    res.send({ message: "user logged in", token });
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while logging in");
  }
};
