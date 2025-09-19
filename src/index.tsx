import { serve } from "@hono/node-server";
import app from "./app.js";

const port = parseInt(process.env.PORT || "3000");

console.log(`Starting server on port ${port} with hostname 0.0.0.0`);
console.log(`Environment PORT: ${process.env.PORT}`);
console.log(`Resolved port: ${port}`);

serve({
  fetch: app.fetch,
  port,
  hostname: "0.0.0.0",
}, (info) => {
  console.log(`✅ Server successfully started on http://0.0.0.0:${info.port}`);
});
