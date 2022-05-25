let db = require("../models/dbc").get()


exports.getAll =()=>{
    return db.Service.findAll()
            
}

exports.getOne=(id)=>{
    return db.Service.findByPk(id)
}

exports.insert= (service)=>{
    return db.Service.create(service) 
}

exports.update= (id, service)=>{
    return db.Service.update(service, {where : {id: id}})
}
exports.delete = (id)=>{
    return db.Service.destroy({ wherre : {id : id}} )
}

exports.getOneByName=(label) => {
    return db.Service.findOne({
        where: {
          label: label 
        }
      })
}