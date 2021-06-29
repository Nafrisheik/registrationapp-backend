const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const apiRouter = require('./routes/router')
const bodyparser = require('body-parser');
const app = express();
dotenv.config({path:'config.env'})
const PORT = process.env.PORT || 8080;


mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
  });
  const db = mongoose.connection;
  db.on("error", (error) => console.log(error));

  db.once("open", () => console.log("connection to db established"));

//middlewares
app.use(bodyparser.urlencoded({extended:true}))

app.use('/',apiRouter);




app.listen(PORT,()=>{
    console.log(`${PORT}`);
})