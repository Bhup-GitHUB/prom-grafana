import type { Request, Response } from "express";
import { Router } from "express";
import { register } from "./metrics";

const router = Router();

router.get("/metrics", async (req: Request, res: Response) => {
  try {
    const metrics = await register.metrics();
    res.set("Content-Type", register.contentType);
    res.end(metrics);
  } catch (error) {
    res.status(500).json({ error: "Failed to generate metrics" });
  }
});

export default router;

