
const userRepository = require("../repository/user-repository")
const roleRepository= require("../repository/role-repository")
const config = require("../config/auth.config");

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
exports.signup = (req, res) => {
  // Save User to Database
  userRepository.create({
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8)
  })
    .then(user => {
      if (req.body.roles) {
        //get the list of roles from the roles
        roleRepository.getListRole(req.body.roles)
        .then(roles => {
          user.setRoles(roles).then(() => {
            res.send({ message: "User was registered successfully!" });
          });
        });
      } else {
        // user role = 2
        user.setRoles([2]).then(() => {
          res.send({ message: "User was registered successfully!" });
        });
      }
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};
exports.signin = (req, res) => {
  userRepository.findOne({
    where: {
      username: req.body.username
    }
  })
    .then(user => {
      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }
      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );
      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!"
        });
      }
      var token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400 // 24 hours
      });
      var authorities = [];
      user.getRoles().then(roles => {
        for (let i = 0; i < roles.length; i++) {
          authorities.push("ROLE_" + roles[i].role.toUpperCase());
        }
        res.status(200).send({
          id: user.id,
          username: user.username,
          email: user.email,
          roles: authorities,
          accessToken: token
        });
      });
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};
exports.getAll = (req, res, next)=>{
    userRepository.getAll()
        .then((data) => {
            res.json(data)
        })
        .catch(err => {
          res.status(500).send({ message: err.message });
        });
}

exports.getOne = (req, res, next)=>{
    userRepository.getOne(req.params.id)
    .then((data)=>{
        res.json(data)
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });

}
exports.findOne = (req, res, next)=>{
    userRepository.findOne(req.body.username)
    .then((data)=>{
        res.json(data)
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
}
exports.findByName = (req, res, next)=>{
  userRepository.findByName(req.body.username)
  .then((data)=>{
      res.json(data)
  })
  .catch(err => {
    res.status(500).send({ message: err.message });
  });
}
exports.getUserId=(req, res, next)=>{
  if(!req.body.username){
    return res.status(404).send({ message: "name not provided." });
  }
  userRepository.findOne(req.body.username)
  .then((data)=>{
    if (!data) {
      return res.status(404).send({ message: "User Not found." });
    }
    res.json(data.id)
   })
   .catch(err => {
    res.status(500).send({ message: err.message });
  });
  
}

exports.insert= (req, res, next)=>{
    userRepository.create(
        {
            name: req.body.username,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 8)
          })
        .then((data)=>{
            res.json(data)
        })
        .catch(err => {
          res.status(500).send({ message: err.message });
        });
}

exports.update= (req, res, next)=>{
    
    userRepository.update(req.params.id, {
        username: req.body.username,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8)
      })
      .then((data)=>{
              if (data) {
                return res.status(200).send({ message: "User upadated successful." });
              }
          })
      .catch(err => {
            res.status(500).send({ message: err.message });
          });
}
exports.delete = (req, res, next)=>{
  userRepository.delete(req.params.id)
  .then(()=>{
    res.status(200).send({message: "User deleted successful"})
    res.json()
  })
  .catch(err => {
    res.status(500).send({ message: err.message });
  });
   
}

exports.removeRole= (req, res, next)=>{
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

exports.addRole= (req, res, next)=>{
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

