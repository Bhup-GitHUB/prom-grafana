import client from "prom-client";

export const register = new client.Registry();

client.collectDefaultMetrics({ register });

export const requestCounter = new client.Counter({
  name: "http_requests_total",
  help: "Total number of HTTP requests",
  labelNames: ["method", "route", "status_code"],
  registers: [register],
});

export const activeRequestGauge = new client.Gauge({
  name: "http_active_requests",
  help: "Number of active HTTP requests",
  registers: [register],
});

export const requestDurationHistogram = new client.Histogram({
  name: "http_request_duration_seconds",
  help: "Duration of HTTP requests in seconds",
  labelNames: ["method", "route", "status_code"],
  buckets: [0.1, 0.5, 1, 2, 5, 10, 30],
  registers: [register],
});
