import blogs from "../models/blogs.js";

export const getBlogByID = async (req, res) => {
    try {
       const { id } = req.params;  
       console.log("id",id); 
      
       const blog = await blogs.findOne({ blogID: id });
       res.send(blog);

    } catch (error) {
        console.error(error);
        res.status(500).send("An error occurred while fetching Blog");
    }
}

