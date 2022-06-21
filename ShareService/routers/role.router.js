const express = require("express")
const router = express.Router()
const roleController= require("../controllers/role-controller")
// const { verifySignUp } = require("../middlewares/verifySingUp");
// const authJwt =require("../middlewares/authJwt") 
<<<<<<< HEAD
<<<<<<< HEAD

router.get("/", roleController.getAll)
router.get("/:id", roleController.getOne)
router.post("/", roleController.create)

=======
=======
>>>>>>> 36639e1 (init)
router.get("/", roleController.getAll)
router.get("/:id", roleController.getOne)
router.post("/", roleController.create)
router.patch("/:id", roleController.update)
router.delete("/:id", roleController.delete)
<<<<<<< HEAD
>>>>>>> 36639e1 (init)
=======
>>>>>>> 36639e1 (init)

module.exports= router