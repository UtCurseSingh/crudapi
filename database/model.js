const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    phone: {
        type: String,
        required: [true, 'Phone no is required']
    },
    name: String,
    age: String,
    gender: String
});

const CustModel = mongoose.model('CustModel', schema);

module.exports = CustModel;