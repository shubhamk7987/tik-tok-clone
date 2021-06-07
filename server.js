//importing statements
import express from "express";
import mongoose from "mongoose";
import Data from "./data.js";
import Videos from "./dbModel.js";
import cors from "cors";

const app= express();
const port= 9000;

//db config
const connection_url = ('mongodb://localhost/tiktok');

mongoose.connect(connection_url,
    {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
    });


    const db =  mongoose.connection;

    db.once('open',()=>{
        console.log("DB connected");
    }).on("error",(error)=>{
        console.log("error is  "+ error );
    })    
    
//middlewares
app.use(express.json());

app.use(cors());
//app.use(bodyparser.json());
//app.use(bodyparser.urlencoded({ extended: false }));


//api routes
app.get("/",(req,res)=> res.status(200).send("hello world"));

app.get('/v1/posts', (req,res)=>{
    res.status(200).send(Data);
});

app.post("/v2/posts",  (req,res)=>{
    const dbVideos = req.body;
    Videos.create(dbVideos, (err,data)=>{
        if(err){
            res.status(500).send(err);
        }
        else{
            res.status(200).send(data);
        }
    }) 
});

app.get("/v3/posts", (req,res)=>{
    Videos.find((err,data)=>{
        if(err){
            res.status(500).send(err);
        }
        else{
            res.status(200).send(data);
        }
    })
})


//port listening
app.listen(port, ()=> console.log(`listening on localhost : ${port}`));

