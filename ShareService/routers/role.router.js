const express = require("express")
const router = express.Router()
const roleController= require("../controllers/role-controller")
// const { verifySignUp } = require("../middlewares/verifySingUp");
// const authJwt =require("../middlewares/authJwt") 
<<<<<<< HEAD

router.get("/", roleController.getAll)
router.get("/:id", roleController.getOne)
router.post("/", roleController.create)

=======
router.get("/", roleController.getAll)
router.get("/:id", roleController.getOne)
router.post("/", roleController.create)
router.patch("/:id", roleController.update)
router.delete("/:id", roleController.delete)
>>>>>>> 36639e1 (init)

module.exports= router