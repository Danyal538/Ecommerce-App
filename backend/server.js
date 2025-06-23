import express from "express";
import { connectDb } from "./config/db.js";
import dotenv from "dotenv";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";
import orderRouter from "./routes/orderRoute.js";
dotenv.config();

const app = express();
const port = 4000

connectDb();
app.get("/", (req, res) => {
    res.send("API working")
})
app.use(express.json());

// api endpoints
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use('/images', express.static("uploads"));
app.use("api/order", orderRouter)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})