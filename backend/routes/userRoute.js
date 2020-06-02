import express from 'express'
import User from '../models/userModel'

const router = express.Router()

router.get("/api/users/createadmin", async(req, res) =>{
    try {
        const user = new User({
            name:'Nifty Farms',
            email: '70908045nico@gmail.com',
            password: 'agroshop123ABC@',
            isAdmin: true
        })
        const newUser = await user.save()
        res.send(newUser)
    } catch (error) {
        res.send({msg: error.message})
    
    }
    
})

export default router