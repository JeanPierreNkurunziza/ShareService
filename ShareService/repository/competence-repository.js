<<<<<<< HEAD
<<<<<<< HEAD
=======
const memberCompetenceModel = require("../models/memberCompetence-model");

>>>>>>> 36639e1 (init)
=======
const memberCompetenceModel = require("../models/memberCompetence-model");

>>>>>>> 36639e1 (init)
let db = require("../models/dbc").get()
const Op = db.Sequelize.Op;


exports.getAll =()=>{
<<<<<<< HEAD
<<<<<<< HEAD
    return db.Competence.findAll()
            
}
=======
=======
>>>>>>> 36639e1 (init)
    return db.Competence.findAll({ 
      include: {
        model: db.MemberCompetence,
        include: { model : db.Member, attributes:['name']}
      }      
        })         
}
// exports.getAll =()=>{
//     return db.Competence.findAll({ include:[
//         { model : db.Member, include:{model: db.Competence, 
//             attributes:['competence']}  }
//     ]})
            
// }
<<<<<<< HEAD
>>>>>>> 36639e1 (init)
=======
>>>>>>> 36639e1 (init)

exports.getOne=(id)=>{
    return db.Competence.findByPk(id)
}

exports.create= (competence)=>{
    return db.Competence.create(competence) 
}

exports.update= (id, competence)=>{
    return db.Competence.update(competence, {where : {id: id}})
}
exports.delete = (id)=>{
<<<<<<< HEAD
<<<<<<< HEAD
    return db.Competence.destroy({ wherre : {id : id}} )
=======
    return db.Competence.destroy({ where : {id : id}} )
>>>>>>> 36639e1 (init)
=======
    return db.Competence.destroy({ where : {id : id}} )
>>>>>>> 36639e1 (init)
}

exports.getOneByName=(label) => {
    return db.Competence.findOne({
        where: {
          label: label 
        }
      })
}
exports.getListCompetence=(competences)=>{ 
    return db.Competence.findAll({
        where: {
          competence: {
            [Op.or]: competences 
          }
        }
      })
}