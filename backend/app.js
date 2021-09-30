const express=require('express')
const app= express();
const mongoose= require("mongoose");
const myList= require("./model/list-model")

const url="mongodb+srv://testUser:wHC2hLKHcKhGjUUW@cluster0.jgr00.mongodb.net/mydatabase?retryWrites=true&w=majority"

//connect to mongodb

mongoose.connect(url,{useNewUrlParser:true}).then(()=>{
  console.log("Connected to database")
},(err)=>{
  console.log(err,"Not connected")
})

//CORS CODE
  //Body Parser Code Cors code
  app.use(express.json());
  app.use(express.urlencoded({extended: false}));

  app.use((req, res, next)=>{
  res.setHeader("Access-Control-Allow-Origin","*");
  res.setHeader("Access-Control-Allow-Headers",
  "Origin,X-Requested-With, Content-Type,Accept");

  res.setHeader("Access-Control-Allow-Methods","GET, POST, PUT, DELETE");
  next();

  });

const game=[
  {title:"NFS",category:"racing",releaseDate:2010},
  {title:"GTA",category:"open world",releaseDate:2011},
  {title:"Mortal Kombat",category:"Fighting",releaseDate:2012},
  {title:"Spiderman",category:"open world",releaseDate:2010},
  {title:"GRID",category:"racing",releaseDate:2009}
]

app.get("/products",(req,res)=>{
  res.status(200).json(game)
})

app.get("",(req,res)=>{
  res.send("Hello Im Express HOMe byeeeee")
})
app.get("/contact",(req,res)=>{
  res.send("Hello Im Express Contact byeeee")
})

app.get("/list",(req,res)=>{
  myList.find().then((data)=>{
    console.log(data)
    res.status(200).json(data)
  })
})
module.exports=app;
