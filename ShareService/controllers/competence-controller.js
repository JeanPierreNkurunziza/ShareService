const competenceRepository = require("../repository/competence-repository")
<<<<<<< HEAD
<<<<<<< HEAD
=======
const { limitString } = require("./limitString-controller")
const fs = require("fs");
const uuid = require('uuid');
>>>>>>> 36639e1 (init)
=======
const { limitString } = require("./limitString-controller")
const fs = require("fs");
const uuid = require('uuid');
>>>>>>> 36639e1 (init)

exports.getAll = (req, res, next)=>{
    competenceRepository.getAll()
        .then((data) => {
<<<<<<< HEAD
<<<<<<< HEAD
            res.json(data)

        })
=======
=======
>>>>>>> 36639e1 (init)
            
            res.json(data)

        })
        .catch(err => {
          res.status(500).send({ message: err.message });
        });
<<<<<<< HEAD
>>>>>>> 36639e1 (init)
=======
>>>>>>> 36639e1 (init)
}

exports.getOne = (req, res, next)=>{
    competenceRepository.getOne(req.params.id)
    .then((data)=>{
        res.json(data)
    })
<<<<<<< HEAD
<<<<<<< HEAD
=======
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
>>>>>>> 36639e1 (init)
=======
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
>>>>>>> 36639e1 (init)

}

exports.create= (req, res, next)=>{
    if(!req.body.competence ){
        return res.status(400).send({ message: "Competence not provided." });
      }
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 36639e1 (init)

      if(req.body.image) {
        const imageName = 'assets/competences/' + uuid.v1(); 
        const base64 = req.body.image.replace(/^data:image\/(png|jpg|jpeg);base64,/, '');
        fs.writeFile(imageName, base64, 'base64', err => {});
        req.body.image = imageName;
      }
<<<<<<< HEAD
>>>>>>> 36639e1 (init)
=======
>>>>>>> 36639e1 (init)
     
      if (req.body.competence > limitString(req.body.competence, 20)){
        return res.status(404).send({ message: "You excedeed the number of the characters (20) required. " });
      }
    competenceRepository.create(req.body)
        .then((data)=>{
            res.json(data)
        })
<<<<<<< HEAD
<<<<<<< HEAD
=======
        .catch(err => {
          res.status(500).send({ message: err.message });
        });
>>>>>>> 36639e1 (init)
=======
        .catch(err => {
          res.status(500).send({ message: err.message });
        });
>>>>>>> 36639e1 (init)
}

exports.findOne = (req, res, next)=>{
    competenceRepository.findOne(req.body.competence)
    .then((data)=>{
        res.json(data)
    })
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> 36639e1 (init)
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
}
exports.update= (req, res, next)=>{

    if (req.body.competence > limitString(req.body.competence, 20)){
      return res.status(404).send({ message: "You excedeed the number of the characters (100) required. " });
    }

    if(req.body.image) {
      const imageName = 'assets/competences/' + uuid.v1(); 
      const base64 = req.body.image.replace(/^data:image\/(png|jpg|jpeg);base64,/, '');
      fs.writeFile(imageName, base64, 'base64', err => {});
      req.body.image = imageName;
    }
   
      competenceRepository.update(req.params.id, {
          competence: req.body.competence,
          image: req.body.image
<<<<<<< HEAD
>>>>>>> 36639e1 (init)
=======
>>>>>>> 36639e1 (init)
               
        })
        .then((data)=>{     
              
              if (data) {  
                  return res.status(200).send({ message: "Competence updated successful." });
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
    competenceRepository.delete(req.params.id)
    .then(()=>{
      res.status(200).send({message: "competence deleted successful"})
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