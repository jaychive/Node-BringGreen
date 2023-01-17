const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();

const navRouter = require('./routes/nav');
const propsRouter = require('./routes/props');
const swiperRouter = require('./routes/swiper');

app.use(cors());

//localhost:8080/navProxy
app.use('/navProxy', navRouter);

//localhost:8080/propsProxy
app.use('/propsProxy', propsRouter);

//localhost:8080/swiperProxy
app.use('/swiperProxy', swiperRouter);

app.listen(8080, ()=>{
  console.log('server is running on 8080')
})