const { Sequelize, DataTypes} = require("sequelize")
const userModel = require("./user-model")
const roleModel = require("./role-model")
const competenceModel = require("./competence-model")
const memberModel = require("./member-model")
const serviceDemandeModel = require("./serviceDemande-model")
const quartierModel=require("./quartier-model")
const memberCompetenceModel=require("./memberCompetence-model")
const serviceModel = require("./service-model")



let dbConnector

module.exports = {  
    
    connect : () => {
        if(!dbConnector)
        {
            let sequelize = new Sequelize("sharingservices", "root", "", { 
                host: "localhost",
                dialect:"mysql",
                logging : false //pour enlever les requettes dans la console 
                
            })
            
            dbConnector = {
                Sequelize: Sequelize,
                sequelize: sequelize,
                User: userModel(sequelize, DataTypes),  
                Role: roleModel(sequelize, DataTypes),
                Member: memberModel(sequelize, DataTypes),
                Competence: competenceModel(sequelize, DataTypes),
                Quartier: quartierModel(sequelize, DataTypes), 
                Service: serviceModel(sequelize, DataTypes),  
                MemberCompetence: memberCompetenceModel(sequelize, DataTypes),   
                ServiceDemande: serviceDemandeModel(sequelize, DataTypes) 
                
            }
            
            dbConnector.Member.belongsToMany(dbConnector.Competence, {through: 'MemberCompetence'},{ timestamps: false})
            dbConnector.Competence.belongsToMany(dbConnector.Member, {through : 'MemberCompetence'},{ timestamps: false}) 
            dbConnector.User.belongsToMany(dbConnector.Role, {through: 'UserRole'},{ timestamps: false})
            dbConnector.Role.belongsToMany(dbConnector.User, {through : 'UserRole'},{ timestamps: false}) 
            dbConnector.Member.belongsToMany(dbConnector.Service, {through: 'ServiceDemande'},{ timestamps: false})
            dbConnector.Service.belongsToMany(dbConnector.Member, {through : 'ServiceDemande'},{ timestamps: false}) 
            dbConnector.User.hasMany(dbConnector.Service, { allowNull: false  })
            dbConnector.Service.belongsTo(dbConnector.User)
            
            dbConnector.Quartier.hasMany(dbConnector.Member, {allowNull:false})
            dbConnector.Member.belongsTo(dbConnector.Quartier)
        

        }
    },
    
    get : () => {
        if(!dbConnector)
            this.connect
        else{
            return dbConnector
        }
    }
}