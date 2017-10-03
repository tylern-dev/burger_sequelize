var db = require("../models");



module.exports = function(app){
    app.post('/api/customer', function(req, res){
        db.customer.create({
            customer_name: req.body.customer_name
        }).then(function(result){
            
            //once the customer has been created, update the burger customerId with the customer ID
            //and set devoured to true
            db.burger.update({
                devoured: true,
                customerId: result.id,
                },{
                where:{
                    id: req.body.burger_id
                }
            })
            res.redirect("/")
        })
    });
}