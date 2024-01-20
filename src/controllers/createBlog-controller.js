import multer from "multer";
import blogs from "../models/blogs.js"
import validateBlog from "../schemas/add-blog-schema.js";

const upload = multer().fields([{ name: 'image' }]); // Define the 'upload' function outside of 'postCreateBlog'

export const postCreateBlog = async (req, res) => {
  upload(req, res, async function(err) {
    if (err instanceof multer.MulterError) {
      console.error(err);
      return res.status(500).send("An error occurred while processing the form data");
    } else if (err) {
      console.error(err);
      return res.status(500).send("An unknown error occurred while processing the form data");
    }
    

    // Everything went fine.
    const blogData = req.body;
    if (req.files && req.files['image']) {
      blogData.image = {
        data: req.files['image'][0].buffer,
        contentType: req.files['image'][0].mimetype
      };
    }
    console.log("blogData",blogData)

    try {
      const { error } = validateBlog.validate(blogData);

      if (error) {
        return res.status(400).send(error.details[0].message);
      }

      const newBlog = new blogs(blogData);

      await newBlog.save();

      console.log(newBlog);

      res.send("Blog Added successful");
    } catch (error) {
      console.error(error);
      res.status(500).send("An error occurred while saving Blog");
    }
  });
};
