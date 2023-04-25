const mongoose = require("mongoose");

const blogModel= new mongoose.Schema({
    blogAuthor:{
        type:String,
        require:true,
    },
    blogTitle:{
        type:String,
        require:true,
    },
    blogDescription:{
        type:String,
        require:true,
    },

})
module.exports=mongoose.model("blog",blogModel)