import express from "express";

const PORT = 3333;

const app = express();

app.use(express.json());

app.get("/products", (request, response) => {
  response.send("Hello World from Products!");
});

app.post("/products", (request, response) => {
  const { name, price } = request.body;
  //response.send(`Product created: ${name} - $${price}`);
  response.status(201).json({ name, price });
});

app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
);
