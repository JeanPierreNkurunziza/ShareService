const competenceRepository = require("../repository/competence-repository")

exports.getAll = (req, res, next)=>{
    competenceRepository.getAll()
        .then((data) => {
            res.json(data)

        })
}

exports.getOne = (req, res, next)=>{
    competenceRepository.getOne(req.params.id)
    .then((data)=>{
        res.json(data)
    })

}

exports.create= (req, res, next)=>{
    if(!req.body.competence ){
        return res.status(400).send({ message: "Competence not provided." });
      }
     
      if (req.body.competence > limitString(req.body.competence, 20)){
        return res.status(404).send({ message: "You excedeed the number of the characters (20) required. " });
      }
    competenceRepository.create(req.body)
        .then((data)=>{
            res.json(data)
        })
}

exports.findOne = (req, res, next)=>{
    competenceRepository.findOne(req.body.competence)
    .then((data)=>{
        res.json(data)
    })
}
exports.update= (req, res, next)=>{
    if(!req.body.competence ){
      return res.status(400).send({ message: "Competence not provided." });
    }
   
    if (req.body.competence > limitString(req.body.competence, 20)){
      return res.status(404).send({ message: "You excedeed the number of the characters (100) required. " });
    }
   
      competenceRepository.update(req.params.id, {
          competence: req.body.competence,
               
        })
        .then((data)=>{     
              
              if (data) {  
                  return res.status(200).send({ message: "Competence updated successful." });
                } 
            })
        .catch(err => {
              res.status(500).send({ message: err.message });
            });
  }