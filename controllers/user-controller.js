const { User } = require('../models');

const userController = {
    //get all users 
    getAllUser(req, res) {
        User.find({})
            .then(dbPizzaData => res.json(dbPizzaData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    }

};

module.exports = userController;