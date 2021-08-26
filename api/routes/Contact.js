const express = require ('express')
const router = express.Router()
const contactContraller =require('../controllers/contactsContolers')




router.get("/",contactContraller.getContactController)
router.get("/:id",contactContraller.getSingleContacts)

router.post('/',contactContraller.postContactController)

module.exports= router