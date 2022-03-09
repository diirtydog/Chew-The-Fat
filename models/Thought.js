

const reactionSchema = new Reaction(
    {
        reactionId: {
            // use mongoose's ObjectId data type
            // default value is set to new ObjectId
        },
        reactionBody: {
            type: String,
            required: true,
            // 280 character maximum
        },
        username: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            // same thing as thought createdAt
        }
    }
)
const thoughtSchema = new Thought (
    {
        thoughtText: {
            type: String,
            required: true,
            // must be between 1 and 280 characters
        },
        createdAt: {
            type: Date,
            // javascript date and set a getter method to format it
        },
        username: {
            type: String.typeOf.Object_id,
            required: true
            // get the username of the user that created this
        },
        reactions[reactionSchema]
    }
)