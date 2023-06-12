import mongoose from 'mongoose'

const QuestionSchema = mongoose.Schema({
    questionTitle: { type: String, required: "Qustion must have a title"},
    questionBody: { type: String, required: "Qustion must have a body"},
    questionTags: { type: [String], required: "Qustion must have a tags"},
    noOfAnswers: { type: Number, default: 0},
    upVote: {type: [String], default: []},
    downVote: {type: [String], default: []},
    userPosted: {type: [String], required: "Qustion must have a userPosted"},
    userId: { type: String},
    askedOn: { type: Date, default: Date.now},
    answer : [{
        answerBody: String,
        userAnswered: String,
        userId: String,
        answeredOn: { type: Date, default: Date.now},

    }]
})

export default mongoose.model("Questions", QuestionSchema)