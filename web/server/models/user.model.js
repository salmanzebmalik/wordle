import mongoose from 'mongoose'

const User = new mongoose.Schema(
    {
        username: {type: String, requried: true, unique: true},
        name: {type: String, requried: true},
        email: { type: String, required: true, unique: true},
        password: { type: String, required: true},
    },
    { collection: 'User-Data' }
)
const model = mongoose.model('UserData', User)
export default model;