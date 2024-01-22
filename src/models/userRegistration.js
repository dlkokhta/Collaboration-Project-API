import { v4 as uuid } from "uuid";
import mongoose from "mongoose";

const { Schema } = mongoose;

const userRegistrationSchema = new Schema({
  username: {
    type: Schema.Types.String,
    required: true,
  },
  
  email: {
    type: Schema.Types.String,
    required: true,
  },
  password: {
    type: Schema.Types.String,
    required: true,
  },
  userID: {
    type: Schema.Types.String,
    required: true,
    default: uuid,
  },
});

const userRegistration = mongoose.model(
  "userRegistration",
  userRegistrationSchema
);

export default userRegistration;
