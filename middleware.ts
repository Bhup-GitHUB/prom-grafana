import type { Request, Response, NextFunction } from "express";
import {
  requestCounter,
  activeRequestGauge,
  requestDurationHistogram,
} from "./metrics";

export function metricsMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  activeRequestGauge.inc();

  const startTime = Date.now();
  const route = req.route?.path || req.path;

  res.on("finish", () => {
    const duration = (Date.now() - startTime) / 1000;
    const statusCode = res.statusCode.toString();

    requestCounter.inc({
      method: req.method,
      route,
      status_code: statusCode,
    });

    requestDurationHistogram.observe(
      {
        method: req.method,
        route,
        status_code: statusCode,
      },
      duration
    );

    activeRequestGauge.dec();
  });

  next();
}

