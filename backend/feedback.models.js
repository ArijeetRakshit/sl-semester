const mongoose = require('mongoose');
const FeedbackListSchema = mongoose.Schema({
    teacher_name:{
        type: String,
        required: true
    },
    score:{
        type: Number,
        required: true
    }
});
module.exports = mongoose.model('Feedbacklist',FeedbackListSchema);