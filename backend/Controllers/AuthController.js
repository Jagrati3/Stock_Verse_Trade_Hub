const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken'); 

const UserModel = require("../model/User");

const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body; // [5]
        
        // Check if user already exists 
        const user = await UserModel.findOne({ email });
        if (user) {
            return res.status(409)
                .json({ message: 'User is already exist, you can login', success: false }); 
        }

        // Prepare new user model 
        const userModel = new UserModel({ name, email, password });
        
        // Encrypt the password before saving 
        userModel.password = await bcrypt.hash(password, 10); 
        
        await userModel.save(); 
        
        res.status(201)
            .json({
                message: "Signup successfully",
                success: true
            }); 
    } catch (err) {
        console.log(err);
        res.status(500)
            .json({
                message: "Internal server error",
                success: false
            }); 
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body; 
        const errorMsg = 'Auth field email or password is wrong'; 
        
        // Find user by email [10]
        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.status(403)
                .json({ message: errorMsg, success: false }); 
        }

        // Compare the provided password with the hashed password in the database
        const isPassEqual = await bcrypt.compare(password, user.password); 
        if (!isPassEqual) {
            return res.status(403)
                .json({ message: errorMsg, success: false }); 
        }

        // Generate JWT Token 
        const jwtToken = jwt.sign(
            { email: user.email, _id: user._id }, // Payload 
            process.env.JWT_SECRET, // Secret key from .env
            { expiresIn: '24h' } // Expiry 
        );

        res.status(200)
            .json({
                message: "Login Success",
                success: true,
                jwtToken,
                email,
                name: user.name 
            });
    } catch (err) {
         console.log(err);
        res.status(500)
            .json({
                message: "Internal server error",
                success: false
            }); 
    }
};

// Exporting controller functions
module.exports = {
    signup,
    login
};