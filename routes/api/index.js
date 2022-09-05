const router = require('express').Router();
const userRoutes = require('./user-routes');
const thoughtRoutes = require('./thought-routes');

router.use('/thoughts', thoughtRoutes);
// add prefix of /users
router.use('/users', userRoutes);

module.exports = router;