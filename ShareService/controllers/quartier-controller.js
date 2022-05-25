const quartierRepository = require("../repository/quartier-repository")

exports.getAll = (req, res, next)=>{
    quartierRepository.getAll()
        .then((data) => {
            res.json(data)
        })
        .catch(err => {
          res.status(500).send({ message: err.message });
        });
}

exports.getOne = (req, res, next)=>{
    quartierRepository.getOne(req.params.id)
    .then((data)=>{
        res.json(data)
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });

}
exports.findOne = (req, res, next)=>{
    quartierRepository.findOne(req.body.quartier)
    .then((data)=>{
        res.json(data)
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
}
exports.findByName = (req, res, next)=>{
  quartierRepository.findByName(req.body.quartier)
  .then((data)=>{
      res.json(data)
  })
  .catch(err => {
    res.status(500).send({ message: err.message });
  });
}
exports.getUserId=(req, res, next)=>{
  if(!req.body.quartier){
    return res.status(404).send({ message: "quartier not provided." });
  }
  quartierRepository.getQuartierId(req.body.quartier)
  .then((data)=>{
    if (!data) {
      return res.status(404).send({ message: "quartier Not found." });
    }
    res.json(data.id) 
   })  
   .catch(err => {
    res.status(500).send({ message: err.message });
  }); 
}

exports.create= (req, res, next)=>{
    quartierRepository.create(
        {
            quartier: req.body.quartier,
            codePostale: req.body.codePostale,
            localite: req.body.localite
          })
        .then((data)=>{
            res.json(data)
        })
        .catch(err => {
          res.status(500).send({ message: err.message });
        });
}

exports.update= (req, res, next)=>{
    
    quartierRepository.update(req.params.id, {
        quartier: req.body.quartier,
        codePostale: req.body.codePostale,
        localite: req.body.localite
      })
      .then((data)=>{
              if (data) {
                return res.status(200).send({ message: "quartier upadated successful." });
              }
          })
      .catch(err => {
            res.status(500).send({ message: err.message });
          });
}
exports.delete = (req, res, next)=>{
  quartierRepository.delete(req.params.id)
  .then(()=>{
    res.status(200).send({message: "quartier deleted successful"})
    res.json()
  })
  .catch(err => {
    res.status(500).send({ message: err.message });
  });
   
}

exports.getQuartierId=(req, res, next)=>{
  quartierRepository.getQuartierId(req.body.quartier)
  .then((data)=>{
    res.json(data)
  })
}