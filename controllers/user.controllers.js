const User = require('../models/user.schema')

const usersCtrl = {
    addUser : async(req,res)=>{
      
    
        

        try {
            const {firstName, lastName , age , email} = req.body
            const newUser= {firstName, lastName , age , email , createdAt : new Date()}
            const userToSave = new User(newUser)
            await userToSave.save()

            res.status(200).json('user added successfully')



        } catch (error) {
            console.log('err', error)
        }
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
    },

    getAllUsers : async (req,res)=>{
        try {
            const data = await User.find()
            console.log('data', data)

            res.status(200).json(data)

        } catch (error) {
            console.log('error', error)
        }
    }

}

module.exports = usersCtrl