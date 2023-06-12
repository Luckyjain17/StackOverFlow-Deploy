import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import userRoutes from './routes/users.js'
import questionRoutes from './routes/Questions.js'
import answerRoutes from './routes/Answer.js'
import dotenv from 'dotenv'
const path = require('path')

const app = express();
dotenv.config();
app.use(express.json({limit : "30mb", extended: true}));
app.use(express.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

app.use(express.static(path.join(__dirname,'./client/build')))
app.get('*',function(req,res){
    res.sendFile(path.join(__dirname,'./client/build/index.html'))
})

app.get('/',(req, res) => {
    res.send("This is a stack overflow clone API")
});


app.use('/user', userRoutes)
app.use('/questions', questionRoutes)
app.use('/answer', answerRoutes)
const PORT = process.env.PORT || 5000

// const CONNECTION_URL = process.nextTick.PORT || 5000

const CONNECTION_URL = "mongodb+srv://Lucky17:Lucky17@stack-overflow-clone.hd4au0i.mongodb.net/test"

mongoose.connect( CONNECTION_URL, {useNewUrlParser : true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => {console.log(`server running on port ${PORT}`)}))
    .catch((err) => console.log(err.message))