// import router middle ware
const router = require('express').Router();
// import pizza functionality 
const pizzaRoutes = require('./pizza-routes');
// import comment functionality
const commentRoutes = require('./comment-routes');
// adding '/comments to routes for comments. 
router.use('/comments', commentRoutes);

// add prefix of `/pizzas` to routes created in `pizza-routes.js`
router.use('/pizzas', pizzaRoutes);

module.exports = router;