import express from "express";
import dotenv from "dotenv";
import { initCore } from "./core/engine.js";
import apiRoutes from "./api/routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api", apiRoutes);

initCore();

app.listen(PORT, () => {
  console.log(`A402Pi running on port ${PORT}`);
});
