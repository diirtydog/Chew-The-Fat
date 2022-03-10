const { Thought, User } = require('../models');

const thoughtController = {
    getAllThoughts(req, res) {
        Thought.find({})
            .then(dbUserData => res.json(dbUserData))
            .catch(err => res.status(400).json(err));
    },

    getThoughtById({ params }, res) {
        Thought.findOne({ _id: params.id })
            .then(dbThoughtData => {
                if (!dbThoughtData) {
                    res.status(404).json({ message: 'No thought at this end point!' });
                    return;
                }
                res.json(dbThoughtData);
            })
            .catch(err => res.status(500).json(err));
    },

    addThought({ params, body }, res) {
        console.log(body);
        Thought.create(body)
            // .then(({ _id }) => {
            //     return User.findOneAndUpdate(
            //         { _id: params.pizzaId },
            //         { $push: { comments: _id } },
            //         { new: true, runValidators: true }
            //     );
            // })
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'No User with this id!' });
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => res.json(err));
    },
    

}

module.exports = thoughtController;