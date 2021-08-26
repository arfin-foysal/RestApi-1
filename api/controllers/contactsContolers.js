const  Contact=require ('../models/ContactsModel')

const  getContactController=(req,res,next)=>{
    Contact.find()
    .then(    Contact.find()
    .then((data)=>{
        res.status(200).json({
            mess:"all con",
            contact:data
        })
    })
    .catch((err)=>{
        res.status(500).json({
            mess:"serverv ert",
            error:err
        })
}))
    .catch( (err)=>{
        res.status(500).json({
            mess:"serverv ert"
            
        })
    })
}


const postContactController=(req,res,next)=>{
    const contact=new Contact({
        name:req.body.name,
        phone:req.body.phone,
        email:req.body.email,
   })
   contact.save()
   .then((data)=>{
       res.status(201).json({
           message:"contact add",
           cd:data
       })
   })
   .catch((err)=>{
       console.log(err);
   })
  
}

const getSingleContacts=(req,res,next)=>{
    let id=req.params.id
    Contact.findById(id)
    .then(cont=>{
        res.status(200).json({
            cont
        })
    })
    .catch((err)=>{
        console.log(err);
    })
}

const editContact=(req,res,next)=>{
    let id= req.params.id

    let updateContact = {
        name:req.body.name,
        phone:req.body.phone,
        email:req.body.email,
    }
    Contact.findByIdAndUpdate(id, {$set: updateContact})
    .then(contact => {
        Contact.findById(contact._id)
        .then(newContact =>{
            res.json({
                mag:"contact Updata",
                newContact
            })
        }
        )
        
    })
    .catch(err=>{
       res.status(500).json({

          msg:"fald",
          err
       })
       console.log(err);
    })
}




const deleteSingleContacts=(req,res,next)=>{
    let id=req.params.id
    Contact.findByIdAndRemove(id)
    .then(cont=>{
        res.json({
            cont
        })
    })
    .catch((err)=>{
        console.log(err);
    })
}


 
module.exports={
    getContactController,
    postContactController,
    getSingleContacts,
    editContact,
    deleteSingleContacts
}