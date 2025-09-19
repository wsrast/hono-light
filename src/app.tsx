import { Hono } from "hono";

const View = () => {
  const styles = {
    color: "#f30",
  };

  return (
    <html>
      <head></head>
      <body>
        <h1 style={styles}>Hello world</h1>
      </body>
    </html>
  );
};

const app = new Hono();

app.get("/", (c) => {
  // Add headers that Railway might expect
  c.header("Cache-Control", "no-cache");
  return c.html(<View />);
});

// Health check endpoint for Railway
app.get("/health", (c) => {
  c.header("Cache-Control", "no-cache");
  return c.json({ status: "ok", timestamp: new Date().toISOString() });
});

// Additional health check endpoints Railway might try
app.get("/healthz", (c) => {
  return c.json({ status: "healthy" });
});

app.get("/ping", (c) => {
  return c.text("pong");
});

export default app;