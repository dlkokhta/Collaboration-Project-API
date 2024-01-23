import jwt from "jsonwebtoken";


const verifyToken = (req, res, next) => {
  const { authorization } = req.headers;
  console.log("authorization!!!!!", authorization);

  if (!authorization) {
    return res.status(401).json({ error: "Authorization header missing" });
  }

  let token = authorization.split(" ")[1];
  console.log("token", token);

  if (!token) {
    return res.status(401).json({ error: "Token missing" });
  }

  try {
    const verified = jwt.verify(token, process.env.SECRET_KEY);
    if (verified) {
      // const id = verified.payload.userID;
      // blogs.userID = id;
      // console.log("id inside auth!!!!!!", id);
      
      req.userID1 = verified.payload.userID;
      
      next();
    }
  } catch (error) {
    return res.status(401).json(error);
  }
};

export default verifyToken;
