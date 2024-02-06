import express from "express";
import bodyParser from "body-parser";
import connectToMongo from "./config/mongo.js";
import dotenv from "dotenv";
import blogRouter from "./routes/blog-router.js";
import swaggerMiddleware from "./middlewares/swagger-middleware.js";
import cors from "cors";



const app = express();
dotenv.config();
connectToMongo();
app.use(cors());

app.use(bodyParser.json());

app.use("/api", blogRouter);

app.use("/public", express.static("public"));

app.use("/", ...swaggerMiddleware());


app.listen(process.env.PORT || 3000);
