const mongoose = require('mongoose');

const certificateSchema = mongoose.Schema({
    created: { type: Date, default: Date.now },
    lastChange: { type: Date, default: Date.now },
    url: { type: String, required: true },
    imagePath: { type: String }
});

module.exports = mongoose.model('Certificate', certificateSchema);