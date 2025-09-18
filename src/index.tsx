import { serve } from "@hono/node-server";
import { Hono } from "hono";

const port = parseInt(process.env.PORT || "3000");
const app = new Hono();

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

app.get("/", (c) => {
  return c.html(<View />);
});

console.log(`Server is running on port ${port}`);

serve({
  fetch: app.fetch,
  port,
});
