const mongoose = require('mongoose');

const serviceSchema = mongoose.Schema({
    created: { type: Date, default: Date.now },
    lastChange: { type: Date, default: Date.now },
    serviceName: { type: String, required: true },
    serviceInfo: { type: String, required: true },
    imagePath: { type: String }
});

module.exports = mongoose.model('Service', serviceSchema);