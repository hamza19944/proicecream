const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json());

let data;
app.post("/api", (req, res) => {
  data = req.body;
  res.send(data);
});
app.get("/api", (req, res) => {
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
