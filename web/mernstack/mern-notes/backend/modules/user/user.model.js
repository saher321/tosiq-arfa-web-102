import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    is_otp_verified: {
        type: Boolean,
        default: false
    },
    otp: {
        type: String,
        default: null
    }
}, { timestamps: true })

const User = mongoose.model("User", userSchema)
export default User