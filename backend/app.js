import dotenv from "dotenv";
import express from "express";
const app = express();
import cookieParser from "cookie-parser";
import cors from "cors";
import bodyParser from "body-parser";
import fileUpload from "express-fileupload";

import { errorMiddleware } from "./middlewares/errors.js";

// Setting up config file
dotenv.config({ path: "backend/config/config.env" });

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cookieParser());
app.use(fileUpload());

//Import all routes
import products from "./routes/products.js";
import auth from "./routes/auth.js";
import order from "./routes/order.js";
import payment from "./routes/payment.js";

app.use("/api/v1/", products);
app.use("/api/v1/", auth);
app.use("/api/v1/", order);
app.use("/api/v1/", payment);

// Middleware to handle errors
app.use(errorMiddleware);

export default app;
