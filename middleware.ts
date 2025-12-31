import type { NextFunction } from "express";

export function cpuMiddleware(req: Request, res: Response, next: NextFunction) {
  const startTime = Date.now();
  next();
  const endTime = Date.now();
  console.log(endTime - startTime + "ms");
}
