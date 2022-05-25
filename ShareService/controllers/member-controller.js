const memberRepository = require("../repository/member-repository")
const quartierRepository= require("../repository/quartier-repository")
const competenceRepository= require("../repository/competence-repository")

exports.create = (req, res) => {
  // Save User to Database
  memberRepository.create({
    name: req.body.name,
    surname: req.body.surname,
    email: req.body.email,
    phone: req.body.phone,
    rue: req.body.rue,
    numero: req.body.numero,
    
   
  })
  .then(member =>{
    
    if (req.body.QuartierId) {
        //get the list of roles from the quartier
        quartierRepository.getOneByName(req.body.QuartierId)
        .then(quartier => {
          member.setQuartier(quartier)
        });
      } else  {
        // set quartier par defaut = 1
        member.setQuartier([4])
      }  
    if (req.body.Competences) {
        //get the list of roles from the competence
        competenceRepository.getListCompetence(req.body.Competences)
        .then(competences => {
          member.setCompetences(competences).then(() => {
            res.send({ message: "Member was registered successfully!" });
          });
        });
      } else {
        // user role = 2
        member.setCompetences([1]).then(() => {
          res.send({ message: "Member was registered successfully!" });
        });
      }
    
    })
        
     .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

exports.getAll = (req, res, next)=>{
    memberRepository.getAll()
        .then((data) => {
            res.json(data)
        })
        .catch(err => {
          res.status(500).send({ message: err.message });
        });
}

exports.getOne = (req, res, next)=>{
    memberRepository.getOne(req.params.id)
    .then((data)=>{
        res.json(data)
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });

}
exports.findOne = (req, res, next)=>{
    memberRepository.findOne(req.body.name)
    .then((data)=>{
        res.json(data)
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
}
exports.findByName = (req, res, next)=>{
  memberRepository.findByName(req.body.name)
  .then((data)=>{
      res.json(data)
  })
  .catch(err => {
    res.status(500).send({ message: err.message });
  });
}
exports.getUserId=(req, res, next)=>{
  if(!req.body.name){
    return res.status(404).send({ message: "name not provided." });
  }
  memberRepository.findOne(req.body.name)
  .then((data)=>{
    if (!data) {
      return res.status(404).send({ message: "member Not found." });
    }
    res.json(data.id)
   })
   .catch(err => {
    res.status(500).send({ message: err.message });
  });
  
}

exports.insert= (req, res, next)=>{
    memberRepository.create(
        {
            name: req.body.name,
            surname: req.body.surname,
            email: req.body.email,
            phone: req.body.phone,
            rue: req.body.rue,
            numero: req.body.numero,
            QuartierId: req.body.QuartierId
          })
        .then((data)=>{
            res.json(data)
        })
        .catch(err => {
          res.status(500).send({ message: err.message });
        });
}

exports.update= (req, res, next)=>{
   
    memberRepository.update(req.params.id, {
        name: req.body.name,
        surname: req.body.surname,
        email: req.body.email,
        phone: req.body.phone,
        rue: req.body.rue,
        numero: req.body.numero,
        QuartierId: quartierRepository.findOne({where :{ quartier: req.body.QuartierId}})
                              .then((quartier)=>{
                                return quartier.id
                              })
        
      })
      .then((data)=>{     
            if (req.body.QuartierId) {
              quartierRepository.findOne({
                where: {
                  quartier: req.body.QuartierId
                }
              })
                .then((quartier) => {  
                  
                   data.QuartierId =  quartier.id 
                   //data.setQuartier(quartier)  
                   console.log(data.QuartierId)
                })
                
            }
          
            if (data) {  
                return res.status(200).send({ message: "User updated successful." });
              } 
          })
      .catch(err => {
            res.status(500).send({ message: err.message });
          });
}
exports.delete = (req, res, next)=>{
  memberRepository.delete(req.params.id)
  .then(()=>{
    res.status(200).send({message: "member deleted successful"})
    res.json()
  })
  .catch(err => {
    res.status(500).send({ message: err.message });
  });
    
}

exports.removeCompetence= (req, res, next)=>{
  userRepository.findOne({
    where: {
      username: req.body.username
    }
  })
    .then(user => {  

      if (req.body.roles) {
        //get the list of roles from the roles to be removed
        roleRepository.getListRole(req.body.roles)
        .then(roles => {
          user.removeRoles(roles).then(() => {
            res.send({ message: "Role was removed successfully!" });
          });
        });
      } else {
          res.send({ message: "Role was not found !" });
      
      }
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
}

exports.addCompetence= (req, res, next)=>{
  userRepository.findOne({
    where: {
      username: req.body.username
    }
  })
    .then(user => {  

      if (req.body.roles) {
        //get the list of roles from the roles to be removed
        roleRepository.getListRole(req.body.roles)
        .then(roles => {
          //the setRoles function replace the whole list, while addRoles just add to the list
          user.addRoles(roles).then(() => {
            res.send({ message: "Role was added successfully!" });
          });
        });
      } else {
          res.send({ message: "Role was not found !" });
      
      }
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};
