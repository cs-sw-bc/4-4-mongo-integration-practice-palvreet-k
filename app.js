import 'dotenv/config';
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import inventoryRoutes from "./routes/inventoryRoutes.js";
import mongoose from "mongoose";

mongoose.connect(process.env.MONGO_URI)
.then(() => (console.log("Connected to Mongo DB")))
.catch((err) => (console.log("Error connecting to DB")))

const app = express();
const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

app.use("/inventory", inventoryRoutes);

app.get("/", (req, res) => {
  res.render("index", { title: "Home" });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
