import blogs from "../models/blogs.js";

export const getAllBlogs = async (req, res) => {
    try {

        console.log("req.userID",req.userID)
        const userBlogs = await blogs.find({ userID: req.userID1 });
        res.send(userBlogs);
    }catch(error) {
        console.error(error);
        res.status(500).send("An error occurred while fetching Blog");
    }
}