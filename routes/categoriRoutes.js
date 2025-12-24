import express from "express";
import { deleteCategori, 
    getCategori, 
    insertCategori, 
    showCategori, 
    updateCategori } 
    from "../controllers/categoriController.js";

const router = express.Router();

router.get("/", getCategori);
router.post("/", insertCategori);
router.get("/:id", showCategori);
router.put("/:id", updateCategori);
router.delete("/:id", deleteCategori);

export default router;