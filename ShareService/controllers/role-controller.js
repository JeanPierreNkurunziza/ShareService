<<<<<<< HEAD
<<<<<<< HEAD
const roleRepository = require("../repository/role-repository")
=======
const roleRepository = require("../repository/role-repository");
const { limitString } = require("./limitString-controller")
>>>>>>> 36639e1 (init)
=======
const roleRepository = require("../repository/role-repository");
const { limitString } = require("./limitString-controller")
>>>>>>> 36639e1 (init)

exports.getAll = (req, res, next)=>{
    roleRepository.getAll()
        .then((data) => {
            res.json(data)

        })
}

exports.getOne = (req, res, next)=>{
    roleRepository.getOne(req.params.id)
    .then((data)=>{
        res.json(data)
    })

}

exports.create= (req, res, next)=>{
    if(!req.body.role ){
        return res.status(400).send({ message: "Role not provided." });
      }
     
      if (req.body.role > limitString(req.body.role, 10)){
        return res.status(404).send({ message: "You excedeed the number of the characters (10) required. " });
      }
     
    roleRepository.create(req.body)
        .then((data)=>{
            res.json(data)
        })
}

exports.findOne = (req, res, next)=>{
    roleRepository.findOne(req.body.role)
    .then((data)=>{
        res.json(data)
    })
}
exports.update= (req, res, next)=>{
<<<<<<< HEAD
<<<<<<< HEAD
    if(!req.body.role ){
      return res.status(400).send({ message: "Role not provided." });
    }
=======
 
>>>>>>> 36639e1 (init)
=======
 
>>>>>>> 36639e1 (init)
   
    if (req.body.role > limitString(req.body.role, 10)){
      return res.status(404).send({ message: "You excedeed the number of the characters (10) required. " });
    }
<<<<<<< HEAD
<<<<<<< HEAD
   
      competenceRepository.update(req.params.id, {
=======
      roleRepository.update(req.params.id, {
>>>>>>> 36639e1 (init)
=======
      roleRepository.update(req.params.id, {
>>>>>>> 36639e1 (init)
          role: req.body.role,
               
        })
        .then((data)=>{     
              
              if (data) {  
                  return res.status(200).send({ message: "Role updated successful." });
                } 
            })
        .catch(err => {
              res.status(500).send({ message: err.message });
            });
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 36639e1 (init)
  }
  exports.delete = (req, res, next)=>{
    roleRepository.delete(req.params.id)
    .then(()=>{
      res.status(200).send({message: "Role deleted successful"})
      res.json()
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
     
<<<<<<< HEAD
>>>>>>> 36639e1 (init)
=======
>>>>>>> 36639e1 (init)
  }