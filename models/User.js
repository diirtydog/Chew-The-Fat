

const userSchema = new User (
    {
        username: {
            type: String,
            unique: true,
            required: true,
            // trim
        },
        email: {
            type: String,
            unique: true,
            required: true,
            // must match a valid email address (look into mongoose's matching validation)
        },
        thoughts: {
            // array of _id values referencing the Thought model
        },
        friends: {
            // array of _id values referencing the User model (self_reference)
        }
    }
)

// create a virtual called friendCount that retrieves the length of the User's friends array field on query.