require('dotenv').config(); // MUST be first
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const studentRoutes = require('./routes/studentRoutes');


const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log('MongoDB Connected 🥵')
    })
    .catch((err)=>{
        console.log('MongoDB connection error', err)
    })
app.use('/api/students', studentRoutes);

const PORT = process.env.PORT || 5000

app.listen(PORT, ()=>{
    console.log(`App listen to port ${PORT} 🥵`)
})