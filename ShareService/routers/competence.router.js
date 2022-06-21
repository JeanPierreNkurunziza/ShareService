const express = require("express")
const router = express.Router()
const competenceController= require("../controllers/competence-controller")
// const { verifySignUp } = require("../middlewares/verifySingUp");
// const authJwt =require("../middlewares/authJwt") 

router.get("/", competenceController.getAll)
router.get("/:id", competenceController.getOne)
router.post("/", competenceController.create)
<<<<<<< HEAD
<<<<<<< HEAD
=======
router.patch("/:id", competenceController.update) 
router.delete("/:id", competenceController.delete)
router.post("/competence", competenceController.findOne)
>>>>>>> 36639e1 (init)
=======
router.patch("/:id", competenceController.update) 
router.delete("/:id", competenceController.delete)
router.post("/competence", competenceController.findOne)
>>>>>>> 36639e1 (init)


module.exports= router