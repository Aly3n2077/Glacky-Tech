import express, { type ErrorRequestHandler } from "express";
import { registerRoutes } from "./routes.js";
import type { ContactStorage } from "./storage.js";

export function createApp(storage?: ContactStorage) {
  const app = express();
  app.disable("x-powered-by");
  app.use("/api", (_req, res, next) => {
    res.set("Cache-Control", "no-store");
    next();
  });
  app.use(express.json({ limit: "16kb" }));
  registerRoutes(app, storage);
  const handleError: ErrorRequestHandler = (error, _req, res, _next) => {
    const status = error.type === "entity.too.large" ? 413
      : error.type === "entity.parse.failed" ? 400 : 500;
    const message = status === 413 ? "Request body is too large."
      : status === 400 ? "Invalid JSON request body."
      : "Unable to save your message. Please try again later.";
    res.status(status).json({ success: false, message });
  };
  app.use(handleError);
  return app;
}
