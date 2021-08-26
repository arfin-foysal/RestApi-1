const express = require('express')
const app =express()
const bodyParser=require ('body-parser')
const PORT= process.env.PORT || 8080
const contactRoute=require('./api/routes/Contact')
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/contactsDB', {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error',(err)=>console.log(err));

db.once('open', function() {
  console.log( "Connect Database");
});


app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())


app.use('/api/contacts',contactRoute)
  
app.get("/",(req,res)=>{
    res.send('start')
})




app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}/`)
})