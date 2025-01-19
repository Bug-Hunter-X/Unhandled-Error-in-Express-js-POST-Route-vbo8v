const express = require('express');
const app = express();
app.use(express.json());
app.post('/data', (req, res) => {
  try {
    console.log(req.body);
    res.send('Data received');
  } catch (error) {
    console.error('Error processing data:', error);
    res.status(400).send('Invalid JSON');
  }
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});