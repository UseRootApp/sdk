import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import articleRoutes from "./routes/articles.js";
import ownershipRoutes from "./routes/ownership.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/articles", articleRoutes);
app.use("/api/ownership", ownershipRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Root API is running 🚀" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
