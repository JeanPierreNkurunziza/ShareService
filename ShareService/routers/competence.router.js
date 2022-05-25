const express = require("express")
const router = express.Router()
const competenceController= require("../controllers/competence-controller")
// const { verifySignUp } = require("../middlewares/verifySingUp");
// const authJwt =require("../middlewares/authJwt") 

router.get("/", competenceController.getAll)
router.get("/:id", competenceController.getOne)
router.post("/", competenceController.create)


module.exports= router