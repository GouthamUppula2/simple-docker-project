const express = require('express');
const path = require('path');
const app = express();

const PORT = 3000;

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

app.get('/api', (req, res) => {
  res.json({ message: 'Hello from your Dockerized Node.js app, Grasper!' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
