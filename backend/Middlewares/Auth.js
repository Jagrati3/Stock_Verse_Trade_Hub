const jwt = require('jsonwebtoken'); //

const ensureAuthenticated = (req, res, next) => {
    // 1. Extract the token from the 'Authorization' header
    const auth = req.headers['authorization']; //
    
    // 2. Check if the token is present
    if (!auth) {
        return res.status(403)
            .json({ message: 'Unauthorized, JWT token is required' }); //
    }

    try {
        // 3. Verify the token using the secret key from environment variables
const token = auth.split(" ")[1]; // remove "Bearer"

const decoded = jwt.verify(token, process.env.JWT_SECRET);        
        // 4. Attach the decoded user information to the request object
        req.user = decoded; //
        
        // 5. Call next() to proceed to the controller/router
        next(); //
    } catch (err) {
        // 6. Return an error if the token is invalid or expired
        return res.status(403)
            .json({ message: 'Unauthorized, JWT token is wrong or expired' }); //
    }
}

// Export the middleware function
module.exports = ensureAuthenticated; //