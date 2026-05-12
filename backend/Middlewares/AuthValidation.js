const Joi = require('joi'); 

const signupValidation = (req, res, next) => {
    // Define the schema for signup [2, 3]
    const schema = Joi.object({
        name: Joi.string().min(3).max(100).required(), // [2, 3]
        email: Joi.string().email().required(), // [3]
        password: Joi.string().min(4).max(100).required() // [3]
    });

    const { error } = schema.validate(req.body); // [3]
    if (error) {
        return res.status(400)
            .json({ message: "Bad request", error }); // [3]
    }
    next(); // [3]
};

const loginValidation = (req, res, next) => {
    // Define the schema for login (only email and password) [4]
    const schema = Joi.object({
        email: Joi.string().email().required(), // [4]
        password: Joi.string().min(4).max(100).required() // [4]
    });

    const { error } = schema.validate(req.body); // [4]
    if (error) {
        return res.status(400)
            .json({ message: "Bad request", error }); // [4]
    }
    next(); // [4]
};

// Exporting the validation middlewares [4]
module.exports = {
    signupValidation,
    loginValidation
};
