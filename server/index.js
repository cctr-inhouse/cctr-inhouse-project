const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const bodyParser = require('body-parser');
const formrouter=require("./routes/formroutes")
const fs=require("fs")
const https=require("https")

 



 

const app=express()  
require("dotenv").config()


app.use(bodyParser.json({ limit: "200mb" }));
app.use(bodyParser.urlencoded({ limit: "200mb",  extended: true, parameterLimit: 1000000 }));
app.use(cors()) 
app.use(express.json());   


app.use('/api/form',formrouter)



  
   
  
  
 
const PORT = process.env.PORT || 80;

/*const dburl='mongodb://0.0.0.0:27017/ioaforms'*/
/*const dburl='mongodb+srv://fakeusername:'+encodeURIComponent('fakepassword')+'@cluster0.x5jbf4w.mongodb.net/chat?retryWrites=true&w=majority'*/
const dburl=process.env.db_url


  


mongoose.connect(dburl, {  
    useNewUrlParser: true,
    useUnifiedTopology: true       
  }); 
  
  mongoose.connection.on('connected', () => {    
    console.log('Successfully connected to MongoDB');      
  });
  
 
 
app.listen(process.env.PORT,()=>{
    console.log(`http server started at port ${PORT}`)
})  

