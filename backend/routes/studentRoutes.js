const express = require('express');
const router = express.Router();


router.post('/add', async(req, res)=>{
    try{
        const { name, age, course } = req.body;

        if(!name || !age || !course){
            res.status(500).json({
                message:'All fields required'
            })
        const newStudent = {
            id: Date.now(),
            name,
            age,
            course,
        };
        const savedStudent = await newStudent.create();
        return res.status(201).json(savedStudent)
    }
    }
    catch(error){
        res.status(500).json({
            message:'server error'
        })
    }
});

module.exports = router;