import Joi from "joi";



const addBlogSchema = Joi.object({
  title: Joi.string().min(4).required().messages({
    "string.base": "title should be a string",
    "string.min": "title should include 3 characters or more",
    "any.required": "title is a required field",
  }),
  description: Joi.string().required().messages({
    "string.base": "description should be a string",
    "string.min": "description should include 3 characters or more",
    "any.required": "description is a required field",
  })
  ,  
  image: Joi.string().required().messages({
   
    "any.required": "image is a required field",
  }),  
  author: Joi.string().required().messages({
    "string.base": "description should be a string",
    "string.min": "description should include 3 characters or more",
    "any.required": "description is a required field",
  }) ,  
  publish_date: Joi.string().required() ,  
  categories: Joi.string().required().messages({
    "string.base": "description should be a string",
    "string.min": "description should include 3 characters or more",
    "any.required": "description is a required field",
  }) ,  
  email: Joi.string().required().messages({
    "string.base": "description should be a string",
    "string.min": "description should include 3 characters or more",
    "any.required": "description is a required field",
  }) ,  
});




// // const addBlogSchema = async (data) => {
// //   return Joi.object({
// //     title: Joi.string().min(4).required() ,  
// //     // .messages({
// //     //   "string.base": "title should be a string",
// //     //   "string.min": "title should include 3 characters or more",
// //     //   "any.required": "title is a required field",
// //     // }),
// //     description: Joi.string().min(4).required()
// //     // .messages({
// //     //   "string.base": "description should be a string",
// //     //   "string.min": "description should include 3 characters or more",
// //     //   "any.required": "description is a required field",
// //     // }),
// //   });
// // };

export default addBlogSchema;
