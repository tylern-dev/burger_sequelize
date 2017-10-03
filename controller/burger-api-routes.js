var db = require("../models");



module.exports = function(app){

    app.get('/', function(req, res){
        db.burger.findAll({
            //this is the join. we are including the customer db
            include: [db.customer]
        }).then(function(data){
            res.render('index', {burgers: data})
        })
    });


    app.post('/api/burger', function(req, res){
        db.burger.create({
            burger_name: req.body.name
        }).then(function(result){
            res.json(result);
        })
    });






}