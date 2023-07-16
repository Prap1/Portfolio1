const express=require('express')

const dotenv=require('dotenv')
const sendMail=require('./contactRoutes.js')
const cors = require('cors');
const path=require('path')

dotenv.config();



const app=express();
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname,'./build')))
app.use("/api", sendMail);

app.use("*",function(req,res){
    res.sendFile(path.join(__dirname,"./build/index.html"));
});




const port=process.env.PORT || 8080
app.listen(port,()=>{
    console.log(`Server Running in ${process.env.NODE_MODE} Mode on port${process.env.PORT}`
    );
});