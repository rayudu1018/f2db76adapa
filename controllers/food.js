var food = require('../models/food'); 
 
// List of all Foods 
exports.food_list = async function(req, res) { 
    try{ 
        theFood = await food.find(); 
        res.send(theFood); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 

// VIEWS 
// Handle a show all view 
exports.food_view_all_Page = async function(req, res) { 
    try{ 
        theFood = await food.find(); 
        res.render('food', { title: 'Food Search Results', results: theFood }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 

// for a specific Tree. 
exports.food_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: Food detail: ' + req.params.id); 
}; 
 
// Handle Food create on POST. 
exports.food_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new food(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"tele_name":"Visio", "size":"90 inch", "cost":"800"} 
    document.foodtype = req.body.foodtype;    
    document.foodquality = req.body.foodquality;
    document.foodcost = req.body.foodcost;  
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 

// Handle Food delete form on DELETE. 
exports.food_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: Food delete DELETE ' + req.params.id); 
}; 
 
// Handle Food update form on PUT. 
exports.food_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: Food update PUT' + req.params.id); 
};

// for a specific food.
exports.food_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await food.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
    };