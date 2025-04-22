const express = require('express');
const app = express();
const port = process.env.PORT || 3040;
const produtoRoutes = require('./src/routes/produtoRoutes.js');
const countRoutes = require('./src/routes/count.js');
const cors = require('cors');

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
  }));
  
app.use('/produtos', produtoRoutes);
app.use('/count', countRoutes);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
