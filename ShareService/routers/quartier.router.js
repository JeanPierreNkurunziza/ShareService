const express = require("express")
const router = express.Router()
const quartierController= require("../controllers/quartier-controller")
router.get("/", quartierController.getAll)
router.get("/:id", quartierController.getOne)
router.post("/", quartierController.create)
<<<<<<< HEAD
<<<<<<< HEAD
router.post("/:getIdQuartier", quartierController.getUserId)
=======
router.post("/:getIdQuartier", quartierController.getQuartierId)
>>>>>>> 36639e1 (init)
=======
router.post("/:getIdQuartier", quartierController.getQuartierId)
>>>>>>> 36639e1 (init)
router.post("/quartier", quartierController.findByName) 
router.patch("/:id", quartierController.update) 
router.delete("/:id", quartierController.delete)


module.exports= router