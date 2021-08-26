const express = require ('express')
const router = express.Router()
const contactContraller =require('../controllers/contactsContolers')




router.get("/",contactContraller.getContactController)
router.post('/',contactContraller.postContactController)
router.get("/:id",contactContraller.getSingleContacts)
router.delete("/:id",contactContraller.deleteSingleContacts)
router.put("/:id",contactContraller.editContact)
 


module.exports= router