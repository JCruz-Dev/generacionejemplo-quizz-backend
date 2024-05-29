import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(
  cors({
    credentials: true,
  }),
);
app.use(bodyParser.json());

const server = http.createServer(app);

server.listen(3200, () =>
  console.log("Server running on http://localhost:3200/"),
);

const MONGO_URL = process.env.MONGO_URL;

mongoose.Promise = Promise;
mongoose
  .connect(MONGO_URL ?? "")
  .then(() => console.log("MONGO CONNECTED SUCCESSFULLY"));
mongoose.connection.on("error", (error: Error) => console.log(error));
