
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.post('/api/generate', (req, res) => {
  // Placeholder for API logic
  res.json({ message: 'Book generation started!' });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
