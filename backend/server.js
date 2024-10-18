import express from "express";
import databaseConfig from "./models/index.js";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(process.env.PORT || 3000, () => {
  databaseConfig.connectDB();
  console.log(`Server is up and running on ${process.env.PORT || 3000}`);
});
