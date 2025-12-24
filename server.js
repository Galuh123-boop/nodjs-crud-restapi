import express from "express";
import dotenv from "dotenv";

import userRoutes from "./routes/userRoutes.js"
import categoriRoutes from "./routes/categoriRoutes.js"
import productRoutes from "./routes/productRoutes.js"

dotenv.config();

const app = express();
app.use(express.json());

app.use("/users", userRoutes);
app.use("/categories", categoriRoutes);
app.use("/products", productRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server berjalan di http://localhost:${process.env.PORT}`);
});