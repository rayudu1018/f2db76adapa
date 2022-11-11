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

// Handle food update form on PUT.
exports.food_update_put = async function(req, res) {
console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
try {
let toUpdate = await food.findById( req.params.id)
// Do updates of properties
if(req.body.food_type)
toUpdate.food_type = req.body.food_type;
if(req.body.cost) toUpdate.cost = req.body.cost;
if(req.body.size) toUpdate.size = req.body.size;
let result = await toUpdate.save();
console.log("Sucess " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
}
};