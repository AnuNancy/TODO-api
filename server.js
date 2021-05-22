const express = require('express');
const colors = require ('colors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const app= express();



app.use(morgan('dev'));

app.use(express.json({}));
app.use(express.json({
    extended: true
}))
dotenv.config({
    path: './config/config.env'
});

connectDB();


//https://anutodoapp.herokuapp.com/api/todo/auth/register

app.use('/api/todo/auth', require('./routes/user'));
app.use('/api/todo', require('./routes/todo'));
// app.get('/todo', (req, res) => {
//     res.status(200).json({
//         "name":"anu",
      
//     });
// });



const PORT= process.env.PORT || 3000;


//app.listen(PORT, console.log(`Server running on port: $(PORT)`.red.underline.bold));
 


// app.get('/todo',(req,res)=>{
//     res.status(200).json({
//         "name":"anuradha"
//     });
// });

app.listen(PORT,'0.0.0.0',console.log(`server is running on ${PORT}`.red.underline.bold))

    










    //netstat -ano | findstr "PID :3000"     (to get pid of port 3000)
    //taskkill /pid 31704 /f                 ( to kill port 3000 with pid- 31704)