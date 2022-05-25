let db = require("../models/dbc").get()


exports.getAll =()=>{
    return db.Member.findAll({ include:[{
        model : db.Quartier, attributes:['quartier'] },{
            model : db.Competence, attributes:['competence']  }]})
            
}

exports.getOne=(id)=>{
    return db.Member.findByPk(id) 
}

exports.create= (quartier)=>{
    return db.Member.create(quartier) 
}

exports.update= (id, member)=>{
    return db.Member.update(member, {where : {id: id}})
}
exports.delete = (id)=>{
    return db.Member.destroy({ where : {id : id}} )
}

exports.getOneByName=(label) => {
    return db.Member.findOne({
        where: {
          label: label 
        }
      })
}
// exports.addCompetenceToMember= ()=>{

//     return db.Member.create({
//         competences:[{
//             competence
//         }]
//     })
// }