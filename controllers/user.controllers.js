const User = require('../models/user.schema')

const usersCtrl = {
    addUser : (req,res)=>{
        const {firstName, lastName , age , email} = req.body
    
        const newUser= {firstName, lastName , age , email , createdAt : new Date()}
    
        const userToSave = new User(newUser)
    
        userToSave.save()
        .then(()=> res.status(200).send('user saved !'))
        .catch((err)=>console.log('err', err))
    } ,

    updateUser: (req,res)=>{
    
        const {firstName, lastName , age , email} = req.body
        User.updateOne(
            {_id:req.params.id},
            {
                $set:{
                    firstName, 
                    lastName , 
                    age , 
                    email,
                    updatedAt : new Date()
                }
            }
        )
        .then(()=> res.status(200).send('User updated successfully'))
        .catch((err)=> console.log('err', err))    
    }
}

module.exports = usersCtrl