const mongoose = require("mongoose") 
const foodSchema = mongoose.Schema({ 
 foodtype: String, 
 foodquality: String, 
 foodcost: Number 
}) 
 
module.exports = mongoose.model("food", foodSchema)