import express from "express";
import path from "node:path";
import { createApp } from "../../server/app.js";

const app = createApp();
const publicPath = path.resolve("dist/public");
app.use(express.static(publicPath));
app.get("*", (_req, res) => res.sendFile(path.join(publicPath, "index.html")));

export default app;
