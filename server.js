require('dotenv').config();
const express = require('express');
const proxy = require('express-http-proxy');
const path = require('path');

const app = express();

const { PORT, AUTH_TOKEN,CLIENT_ID } = process.env;

app.use('/igdb', proxy('https://api.igdb.com',{
  proxyReqOptDecorator: (proxyReqOpts, srcReq)=> {
      proxyReqOpts.headers['Client-ID'] = CLIENT_ID;
      proxyReqOpts.headers['Accept'] = 'application/json';
      proxyReqOpts.headers['Authorization'] = 'Bearer '+AUTH_TOKEN;
      proxyReqOpts.method = 'POST';
      return proxyReqOpts;
  }
}))

app.use(express.static(path.resolve(__dirname + '/react-ui/build')));




app.get('/heartbeat', (req,res)=>{
  res.json({
    'is':'working'
  })
})

app.listen(PORT, () => {
  console.log(`the server is listening at port ${PORT}`);
})