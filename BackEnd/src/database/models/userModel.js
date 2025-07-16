import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Please add an email to userSchema']
    },
    password: {
        type: String,
        required: [true, 'Please add a password to userSchema'],
        unique: true
    }
}, {
    timestamps: true,
    collection: 'users'
})

export default mongoose.model('UserModel', userSchema)

// EOF
