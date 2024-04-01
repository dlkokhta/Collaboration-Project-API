
import mongoose from "mongoose";
import { v4 as uuid } from "uuid";

const { Schema } = mongoose;

const blogsSchema = new Schema({
  userID: {
    type: Schema.Types.String,
    required: true,
    
  },

  title: {
    type: Schema.Types.String,
    required: true,
  },
  description: {
    type: Schema.Types.String,
    required: true,
  },
  avatar: {
     type: Schema.Types.String,
    required: true,
  },
  author: {
    type: Schema.Types.String,
    required: true,
  },
  publish_date: {
    type: Date,
    default: Date.now(), // Set default to current date in string format
    required: true,
  },

  categories: {
    type: Schema.Types.String,
    required: true,
  },
  email: {
    type: Schema.Types.String,
    required: true,
  },
  blogID: {
    type: Schema.Types.String,
    required: true,
    default: uuid,
  },
});

const blogs = mongoose.model("blogs", blogsSchema);

export default blogs;
    
