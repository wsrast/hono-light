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
  return c.html(<View />);
});

// Health check endpoint for Railway
app.get("/health", (c) => {
  return c.json({ status: "ok", timestamp: new Date().toISOString() });
});

export default app;