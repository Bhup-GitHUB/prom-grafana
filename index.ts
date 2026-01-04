import express from "express";
import { metricsMiddleware } from "./middleware";
import apiRoutes from "./api";
import metricsRoutes from "./metrics-route";

const app = express();

app.use(express.json());
app.use(metricsMiddleware);

app.use("/", apiRoutes);
app.use("/", metricsRoutes);

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
