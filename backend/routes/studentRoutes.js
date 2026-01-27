const express = require('express');
const router = express.Router();
const Student = require('../models/Student')


router.post('/add', async(req, res)=>{
    try{
        const { name, age, course } = req.body;

        if(!name || !age || !course){
            return res.status(400).json({
                message:'All fields required'
            })
    }
    const newStudent = new Student({name,age,course});
    const saveStudent = await newStudent.save();

    return res.status(201).json(saveStudent)
    }
    catch(error){
        res.status(500).json({
            message:'server error'
        })
    }
});

module.exports = router;