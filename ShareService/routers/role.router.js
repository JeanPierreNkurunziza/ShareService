const express = require("express")
const router = express.Router()
const roleController= require("../controllers/role-controller")
// const { verifySignUp } = require("../middlewares/verifySingUp");
// const authJwt =require("../middlewares/authJwt") 

router.get("/", roleController.getAll)
router.get("/:id", roleController.getOne)
router.post("/", roleController.create)


module.exports= router