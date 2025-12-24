import express from "express";
import { deleteProduct, 
    getProduct, 
    insertProduct, 
    showProduct, 
    updateProduct } 
    from "../controllers/productController.js";

const router = express.Router();

router.get("/", getProduct);
router.post("/", insertProduct);
router.get("/:id", showProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;