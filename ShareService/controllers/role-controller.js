const roleRepository = require("../repository/role-repository")

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