import blogs from "../models/blogs";

export const getAllBlogsByCategory = async (req, res) => {
    try {
        const { category } = req.params;
        console.log("category",category)
        const userBlogs = await blogs.find({ category: category });
        res.send(userBlogs);
    }catch(error) {
        console.error(error);
        res.status(500).send("An error occurred while fetching Blog");
    }
}