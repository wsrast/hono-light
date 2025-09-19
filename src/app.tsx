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

export default app;