import type { Request, Response } from "express";
import { Router } from "express";

const router = Router();

router.get("/math", (req: Request, res: Response) => {
  for (let i = 0; i < 1000000000; i++) {
    Math.random() * 10;
  }

  res.json({
    message: "done!",
  });
});

router.get("/user", (req: Request, res: Response) => {
  res.json({
    message: "user fetched!",
  });
});

export default router;

