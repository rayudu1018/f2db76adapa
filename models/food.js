const mongoose = require("mongoose") 
const foodSchema = mongoose.Schema({ 
 foodtype: {
    type: String,
    required:true,
    minLength:4,
    maxLength:5000

 },
 foodquality: String, 
 foodcost: {
    type: Number,
    required:true,
    min:4,
    max:10000
 } 
}) 
 
module.exports = mongoose.model("food", foodSchema)