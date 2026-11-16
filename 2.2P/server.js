const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/add', (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);

  if (req.query.a === undefined || req.query.b === undefined ||
      String(req.query.a).trim() === '' || String(req.query.b).trim() === '' ||
      !Number.isFinite(a) || !Number.isFinite(b)) {
    return res.status(400).send('Error: Please provide two valid numbers using a and b.');
  }

  const sum = a + b;
  res.send(`The sum of ${a} and ${b} is: ${sum}`);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
