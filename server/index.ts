import { createServer } from "node:http";
import { createApp } from "./app.js";

const app = createApp();
const server = createServer(app);
if (process.env.NODE_ENV !== "production") {
  const { setupVite } = await import("./vite.js");
  await setupVite(app, server);
} else {
  const { default: path } = await import("node:path");
  const { default: express } = await import("express");
  const publicPath = path.resolve("dist/public");
  app.use(express.static(publicPath));
  app.get("*", (_req, res) => res.sendFile(path.join(publicPath, "index.html")));
}
server.listen(Number(process.env.PORT || 5000), "0.0.0.0");
