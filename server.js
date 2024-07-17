const express = require('express');
const bodyParser = require('body-parser');
const planRoutes = require('./routes/planRoutes');
const activationRoutes = require('./routes/activationRoutes');

const app = express();
const PORT = 8500;

app.use(bodyParser.json());

app.use('/api/plans', planRoutes);
app.use('/api', activationRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
