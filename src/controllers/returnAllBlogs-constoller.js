import blogs from "../models/blogs.js";

export const getAllBlogs = async (req, res) => {
    try {

       
        // const userBlogs = await blogs.find({ userID: req.userID1 });
        const userBlogs = await blogs.find();
        res.send(userBlogs);
    }catch(error) {
        console.error(error);
        res.status(500).send("An error occurred while fetching Blog");
    }
}