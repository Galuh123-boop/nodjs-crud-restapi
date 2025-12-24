import express from "express";
import { deleteUser, 
    getUser, 
    insertUser, 
    showUser, 
    updateUser } 
    from "../controllers/userController.js";

const router = express.Router();

router.get("/", getUser);
router.post("/", insertUser)
router.get("/:id", showUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;