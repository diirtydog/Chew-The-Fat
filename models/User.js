const { Schema, model } = require('mongoose');
const validateEmail = require('../utils/validator')

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
            validate: [validateEmail, 'Please enter a valid email address'],
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
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

// userSchema.virtual('friendCount', {
//     ref: User.length,
//     localField: '_id',
//     foreignField: 'friends',
//     justOne: false,
// },
// {
//     toJSON: { virtuals: true }
// });

// create a virtual called friendCount that retrieves the length of the User's friends array field on query.
userSchema.virtual('friendCount').get(function () {
    return this.friends.length
});

const User = model('User', userSchema);

module.exports = User;