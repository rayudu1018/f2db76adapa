var express = require('express');
const food_controlers= require('../controllers/food'); 
var router = express.Router();

// GET request for one food.
router.get('/food/:id', food_controlers.food_detail);

/* GET costumes */ 
router.get('/', food_controlers.food_view_all_Page ); 
module.exports = router; 
