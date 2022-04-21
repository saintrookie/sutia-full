const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require('jsonwebtoken');

//Register
router.post("/register", async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.SECRET).toString(),
    });


    try{
        const savedUser = await newUser.save();
        res.status(200).json(savedUser);
    }catch(err){
        res.status(500).json(err);
    }
    
});


// LOGIN
router.post("/login", async (req, res) => {
    try{
        const user = await User.findOne({ username: req.body.username });
        !user && res.status(401).json('Username not found');
        const hashed =  CryptoJS.AES.decrypt(user.password, process.env.SECRET);
        const oriPassword = hashed.toString(CryptoJS.enc.Utf8);
        oriPassword !== req.body.password && res.status(401).json('Wrong Credentials');

        const accessToken = jwt.sign({
                id:user._id, 
                isAdmin: user.isAdmin,
            }, process.env.JWT_TOKEN,
            {expiresIn: '3d'}
        );

        const { password, ...others } = user._doc;
        
        res.status(200).json({...others, accessToken});
    }catch(err){
        res.status(500).json(err);
    }
    
});


module.exports = router;