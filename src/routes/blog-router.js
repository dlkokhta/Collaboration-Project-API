import express from "express";
import{ postUserRegistration } from "../controllers/userRegistration-controller.js";
import { postUserLogin } from "../controllers/userLogin-controller.js";
import { postCreateBlog } from "../controllers/createBlog-controller.js";
import { getBlogByID } from "../controllers/returnBlogByID-controller.js";
import { getAllBlogs } from "../controllers/returnAllBlogs-constoller.js";
import verifyToken from "../middlewares/auth-middleware.js";
import multer from "multer";

 


const blogRouter = express.Router();

const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./public/storage/images");
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype === "image/png" || 
        file.mimetype === "image/jpg" ||
        file.mimetype === "image/jpeg") {
            cb(null, true);
        } else {
            cb(null, false);
        }
};

 

blogRouter.post("/registration", postUserRegistration);
blogRouter.post("/login", postUserLogin);
blogRouter.post("/create-blog", verifyToken, multer({storage:fileStorage, fileFilter}).single("avatar"),postCreateBlog);

blogRouter.get("/blogs/:id", getBlogByID);
blogRouter.get("/blogs", getAllBlogs);






export default blogRouter;

