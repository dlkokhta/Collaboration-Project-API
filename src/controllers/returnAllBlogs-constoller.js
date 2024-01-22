import blogs from "../models/blogs.js";

export const getAllBlogs = async (req, res) => {
    try {
        const blog = await blogs.find();
        res.send(blog);
    }catch(error) {
        console.error(error);
        res.status(500).send("An error occurred while fetching Blog");
    }
}