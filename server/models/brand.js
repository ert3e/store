const mongoose = require('mongoose');

const brandSchema = mongoose.Schema({
    name:{
        require: true,
        type: String,
        uniqueL: 1,
        maxlength:100
    }
});

const Brand = mongoose.models('Brand', brandSchema);

module.exports = {Brand}