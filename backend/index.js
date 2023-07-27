const express=require('express')

const dotenv=require('dotenv')
const sendMail=require('./contactRoutes.js')
const cors = require('cors');


dotenv.config();



const app=express();
app.use(express.json());
app.use(cors());

app.use("/api", sendMail);





const port=process.env.PORT || 8080
app.listen(port,()=>{
    console.log(`Server Running in ${process.env.NODE_MODE} Mode on port${process.env.PORT}`
    );
});