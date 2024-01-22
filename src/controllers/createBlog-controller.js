import multer from "multer";
import blogs from "../models/blogs.js"
// import validateBlog from "../schemas/add-blog-schema.js";



export const postCreateBlog = async (req, res) => {
    
 
  const { file, body } = req;
  console.log(file);
  

//  const validator = await validateBlog({ ...body, avatar: file.filename });

    try {
      // const {value, error } = validateBlog.validate({})

      // if (error) {
      //   return res.status(400).send(error.details[0].message);
      // }

      const blog = new blogs({
        ...body,
        avatar: file.filename,
      }); 
      await blog.save();
      

      res.send("Blog Added successful");
    } catch (error) {
      console.error(error);
      res.status(500).send("An error occurred while saving Blog");
    }
  
};
