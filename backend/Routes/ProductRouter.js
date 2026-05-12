const router = require('express').Router(); 
const ensureAuthenticated = require('../Middlewares/Auth'); // [4]

// This is a protected route. Only authenticated users can access it.
router.get('/', ensureAuthenticated, (req, res) => {
    // Logging the user details extracted from the JWT token by the middleware
    console.log('---- logged in user detail ---', req.user); // [5]
    
    // Returning a dummy list of products as a JSON response
    res.status(200).json([
        {
            name: "mobile",
            price: 10000
        },
        {
            name: "tv",
            price: 20000
        }
    ]); // [1]
});

// Exporting the router to be used in the main index.js file
module.exports = router; // [6]