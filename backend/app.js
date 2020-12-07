const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const FeedbackList = require('./feedback.models');

const app = express();

const feedbackRoute = require('./feedback.routes');

mongoose.connect(
    "mongodb+srv://Arijeet_725:Qm0tiDujbnpOnIT9@cluster0.p9j7r.mongodb.net/sl-teacher-feedback?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)
.then(()=>console.log('Connected to database successfully'))
.catch((err) => console.log(err));

app.use(cors());
app.use(express.urlencoded({
    extended:true
}));
app.use(express.json());

app.use('/feedback',feedbackRoute);

app.get('/feedback', async(req,res) => {
    try{
        const foundFeedback = await FeedbackList.aggregate(
            [
                {
                    $group:
                        {
                            _id:"$teacher_name",
                            avgscore: { $avg:"$score"}
                        }
                }
            ]
        )
        res.json(foundFeedback);
    } catch(err){
        console.log(err);
    }
});

const PORT = 3000;
app.listen(PORT,console.log(`Server started at port: ${PORT}`));