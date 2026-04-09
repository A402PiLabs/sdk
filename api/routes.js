import express from "express";
import { sampleModule } from "../modules/sampleModule.js";
import { formatResponse } from "../utils/helpers.js";

const router = express.Router();

router.get("/status", (req, res) => {
  const result = sampleModule();
  res.json(formatResponse(result));
});

export default router;
