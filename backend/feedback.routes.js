const route = require('express').Router();
const FeedbackList = require('./feedback.models');

route.post('/',async(req,res) => {
    const teacher_name = req.body.teacher_name;
    const score = req.body.score;

    const feedbackItem = FeedbackList({
        teacher_name:teacher_name,
        score:score
    })

    try{
        const saveFeedback = await feedbackItem.save();
        res.json(saveFeedback);
    } catch(err){
        console.log(err);
    }
});

module.exports = route;