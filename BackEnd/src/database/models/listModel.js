import mongoose from 'mongoose'

const listSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'UserModel'
    },
    topic: {
        type: String,
        required: [true, 'Please add a topic to listSchema']
    },
    firstItem: {
        type: String,
        required: [true, 'Please add the first item to listSchema']
    },
    secondItem: {
        type: String,
        required: [true, 'Please add the second item to listSchema']
    },
    thirdItem: {
        type: String,
        required: [true, 'Please add the third item to listSchema']
    }
}, {
    timestamps: true,
    collection: 'lists'
})

export default mongoose.model('ListModel', listSchema)

// EOF
