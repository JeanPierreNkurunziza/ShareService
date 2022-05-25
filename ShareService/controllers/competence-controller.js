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