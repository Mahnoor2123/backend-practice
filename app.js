const express = require("express");
const app= express();
const mongoose = require("mongoose");
const blog=require("./ApiModel/blogModel");
const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());


app.post("/addBlog",async(req,res)=>{
const {blogAuthor,blogTitle,blogDescription}= req.body;
const Blog= await new blog({
    blogAuthor,
    blogTitle,
    blogDescription,
});
await Blog.save();
res.json({
    status:200,
    message:"blogs added sucessfully",
    data:Blog
})
});






mongoose.connect("mongodb://127.0.0.1:27017/practiceblog").then((result) => {
    console.log("connected to db");
}).catch((err) => {
    console.log(err.message);
});



app.listen("3000",()=>{
    console.log("sucessfully running in port 3000");
})