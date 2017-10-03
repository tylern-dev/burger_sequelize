module.exports = function(sequelize, Sequelize){
    var User = sequelize.define('customer',{
        customer_name:{
            type:Sequelize.STRING
        }
    });


    return User;
}