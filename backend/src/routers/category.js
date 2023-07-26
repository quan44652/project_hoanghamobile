import express from "express";
import { getAllCategory } from "../controllers/category";

const router = express.Router();

router.get("/category", getAllCategory);

export default router;
