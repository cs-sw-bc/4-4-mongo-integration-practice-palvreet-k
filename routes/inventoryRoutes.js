import { Router } from "express";
import { redirectToDelete,deleteItem, list, redirectToAdd, redirectToEdit, addItem, updateItem } from "../controllers/inventory.js";

const router = Router();

// List all inventory items
router.get("/", list);

// Show add new item form
router.get("/add", redirectToAdd);

// Add new item (POST)
router.post("/add", addItem);

// Show edit item form
router.get("/edit", redirectToEdit);

// Update item (POST)
router.post("/edit", updateItem);

router.get("/delete", redirectToDelete);

router.post("/delete", deleteItem);

export default router;
