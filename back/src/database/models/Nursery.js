import mongoose from "mongoose";
const { Schema, model } = mongoose;

const nurserySchema = new Schema({
    usernursery: [{
        type: mongoose.Types.ObjectId,
        ref: 'user',
        required: true,
    }],
    namenursery: {
        type: String,
        maxlength: 50,
        required: true
    },
    telephone: {
        type: Number,
        maxlength: 20,
        required: true,
        unique: true,
    },
    province: {
        type: String,
        maxlength: 20,
        required: true
    },
    city: {
        type: String,
        maxlength: 20,
        required: true
    },
    adress: {
        type: String,
        maxlength: 50,
        required: true
    },
    role: {
        type: Number,
        default: 1
    },
}, {timestamps: true});

export const nursery = model('nursery', nurserySchema)