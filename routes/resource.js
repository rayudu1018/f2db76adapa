var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var food_controller = require('../controllers/food'); 
const food = require('../models/food');
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// COSTUME ROUTES /// 
 
// POST request for creating a Costume.  
router.post('/food', food_controller.food_create_post); 
 
// DELETE request to delete Costume. 
router.delete('/food/:id', food_controller.food_delete); 
 
// PUT request to update Costume. 
router.put('/food/:id', food_controller.food_update_put); 
 
// GET request for one Costume. 
router.get('/food/:id', food_controller.food_detail); 
 
// GET request for list of all Costume items. 
router.get('/food', food_controller.food_list); 
 
module.exports = router;

