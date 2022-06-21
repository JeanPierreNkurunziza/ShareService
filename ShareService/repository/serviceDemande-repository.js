let db = require("../models/dbc").get()
const Op = db.Sequelize.Op;



exports.update= (memberId, serviceId, serviceDemande)=>{
    
    return db.sequelize.model("ServiceDemande").update(serviceDemande, 
        { where : {[Op.and]: [{ MemberId: memberId}, { ServiceId: serviceId}]} 
                
<<<<<<< HEAD
<<<<<<< HEAD
})}
=======
=======
>>>>>>> 36639e1 (init)
})}

exports.update= (id, memberId, serviceId, serviceDemande)=>{
    return db.sequelize.model("ServiceDemande").update(serviceDemande, 
        { where : {[Op.and]: [{id:id},{ MemberId: memberId}, { ServiceId: serviceId}]} 
               
})}
<<<<<<< HEAD
>>>>>>> 36639e1 (init)
=======
>>>>>>> 36639e1 (init)
