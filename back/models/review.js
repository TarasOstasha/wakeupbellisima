let mongoose = require('mongoose');

let ReviewMessage = mongoose.model('ReviewMessage', {
    created: { type: Date, default: Date.now },
    emailReview: 'string',
    nameReview: 'string',
    messageReview: 'string',
    stars: 'string'
})

module.exports = ReviewMessage;