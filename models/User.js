const { Schema, model } = require('mongoose');

const userSchema = new Schema (
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        email: {
            type: String,
            unique: true,
            required: true,
            // must match a valid email address (look into mongoose's matching validation)
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought'
            }
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
            // array of _id values referencing the User model (self_reference)
        ]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);

// create a virtual called friendCount that retrieves the length of the User's friends array field on query.
userSchema.virtual('friendCount').get(function() {
    return this.friends.reduce((total, friend) => total + 1, 0);
})

const User = model('User', userSchema);

module.exports = User;