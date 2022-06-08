import express, { Express } from "express";
import routes from "./routes";
import mongoose from "mongoose";

class App {
  server: Express;
  constructor() {
    this.server = express();
    this.middleware();
    this.routes();
    mongoose.connect("mongodb://localhost:27017/tasks");
  }

  middleware() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
