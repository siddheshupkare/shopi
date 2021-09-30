var mongoose= require("mongoose")

var Schema= mongoose.Schema;

var listSchema=new Schema({
  _id: Schema.Types.ObjectId,
  name: String,
  rollno: Number,
  phone: Number,
  address: String
})

var mylist=mongoose.model("Model",listSchema,"testcollection")

module.exports=mylist
