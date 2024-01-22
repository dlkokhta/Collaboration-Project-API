import blogs from "../models/blogs.js";

export const getBlogByID = async (req, res) => {
    try {
       const { id } = req.params;   
       console.log("id",id)

        // const blog = await blogs.findOne(blogs.blogID);
        // if (blog !== id) {
        //     return res.status(404).send("Blog not found");
        // }
        // if (id === blogs.blogID) {
        //     return res.send(blog);
        // }

    } catch (error) {
        console.error(error);
        res.status(500).send("An error occurred while fetching Blog");
    }
}

