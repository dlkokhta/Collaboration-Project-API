import express from "express";
import{ postUserRegistration } from "../controllers/userRegistration-controller.js";
import { postUserLogin } from "../controllers/userLogin-controller.js";
import { postCreateBlog } from "../controllers/createBlog-controller.js";


const blogRouter = express.Router();

blogRouter.post("/registration", postUserRegistration);
blogRouter.post("/login", postUserLogin);
blogRouter.post("/create-blog", postCreateBlog);

export default blogRouter;
