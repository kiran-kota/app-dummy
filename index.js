require('dotenv').config()
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const path = require('path');
 
const app = express();
app.use(express.static(path.join(__dirname, 'public')));

const proxyMiddleware = createProxyMiddleware({
    target: process.env.URL,
    changeOrigin: true,
  });

app.use('/api', proxyMiddleware);

app.get('*', (req, res) =>res.sendFile(path.join(__dirname,'public/index.html')));
app.listen(process.env.PORT, () => { console.log(`Server is running on http://localhost:${process.env.PORT}`)});