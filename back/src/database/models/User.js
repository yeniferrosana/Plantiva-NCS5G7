import bcrypt from "bcryptjs";
import mongoose from "mongoose";
const { Schema, model } = mongoose;

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        minlength: 3,
        maxlength: 50,
        required: true
    },
    birthdate: {
        type: Date,
        required: false
    },
    img: {
        data: Buffer,
        contentType: String,
        required: false
    },
    social: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: [true, 'Please add a E-mail'],
        trim: true,
        unique: true,
        lowercase: true,
        index: { unique: true },
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            'Please add a valid E-mail'
        ]
    },
    password: {
        type: String,
        required: [true, 'Please add a Password'],
        minlength: [6, 'Password must have at least six (6) characters'],
        match: [
            /^(?=.*\d)(?=.*[@#\-_$%^&+=!\?])(?=.*[a-z])[0-9A-Za-z@#\-_$%^&+=!\?]+$/,
            'password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number and special characters'
        ]
    },
    role: {
        type: Number,
        default: 0
    },
},
{timestamps: true});

userSchema.pre('save', async function (next) {
    const user = this;

    if (!user.isModified("password"))
    return next();

    try {
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
        next();
    } catch (error) {
        console.log(error);
        throw new Error('Fallo el hash de contraseña');
    }
});

export const User = model('User', userSchema)