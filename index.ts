import express from "express";
import { cpuMiddleware } from "./middleware";

const app = express();
//@ts-ignore
app.use(cpuMiddleware);
app.get("/math", (req, res) => {
  for (let i = 0; i < 1000000000; i++) {
    Math.random() * 10;
  }

  res.json({
    message: "done!",
  });
});

app.get("/user", (req, res) => {
  res.json({
    message: "user fetched!",
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
