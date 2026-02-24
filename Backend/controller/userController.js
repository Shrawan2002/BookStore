import User from "../model/userMOdel.js";

export const signup = async(req,res)=>{
    try{
        const {fullname,email,password} = req.body;
        const user = await User.findOne({email});
        if(user){
            return res.status(400).json({message: "User already exists"})
        }

        const createdUser = new User({
            fullname,
            email,
            password
        })

        createdUser.save()
        res.status(201).json({message: "User created successfully"});

    }catch(err){
        console.log("Error: " + err.message);
        res.status(500).json({message: "Internal server error"})
    }
}