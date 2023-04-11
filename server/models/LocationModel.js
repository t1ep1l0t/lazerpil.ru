import mongoose from "mongoose";

const LocationModel = new mongoose.Schema({
    metro: {type: String, require: true, unique: false},
    address: {type: String, require: true, unique: false},
    color: {type: String, require: true, unique: false},
    coords: [{type: String, require: true, unique: false}],
    path: {type: String, require: true, unique: false},

    entrance: [{type: String, require: false, unique: false }],
    equip: [{type: String, require: false, unique: false }],
    interior: [{type: String, require: false, unique: false }],
    result: [{type: String, require: false, unique: false }],
    service: [{type: String, require: false, unique: false }]
});

export default mongoose.model('LocationModel', LocationModel);