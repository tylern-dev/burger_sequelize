module.exports = function(sequelize, Sequelize){
    var Burger = sequelize.define('burger',{
        burger_name: {
            type:Sequelize.STRING
        },
        devoured:{
            type: Sequelize.BOOLEAN,
            defaultValue: false
        }
    });
    //1:1 relation
    Burger.associate = function(model){
        Burger.belongsTo(model.customer)
    }
    
    return Burger;
}