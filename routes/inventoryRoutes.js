import { Router } from "express";
import { list, redirectToAdd, redirectToEdit } from "../controllers/inventory.js";

const router = Router();

// List all inventory items
router.get("/", list);

// Show add new item form
router.get("/add", redirectToAdd);

// Show edit item form
router.get("/edit", redirectToEdit);

export default router;
