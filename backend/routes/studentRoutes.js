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

router.get('/', async (req, res)=>{
    try{
        const students = await Student.find();
        res.status(200).json(students);
    }catch(error){
        res.status(500).json({
            message : 'Error fetching students'
        })
    }
})

router.delete('/":id', async(req, res)=>{
    try{
        const studentId = req.params.id;
        const deletedStd = await Student.findByIdAndDelete(studentId);
        res.status(200).json({
            message:'Student Deleted',
            studentName: deletedStd.name
        })
    }catch(error){
        res.status(500).json({
            message:'Error deleting student'
        })
    }
})

router.put('/:id', async(req, res)=>{
    try{
        const studentId = req.params.id;
        const {name, age, course} = req.body;

        const updatedStudent = await Student.findByIdAndUpdate(
            studentId,
            {name, age, course},
            {new: true}
        );
        res.status(200).json({
            message : 'Student Updated Successfully 🥰'
        })
        if(!updatedStudent){
            res.status(404).json({
                message : 'Student not found 😢'
            })
        }

    }catch(error){
        res.status(500).json({
            message : 'Fail to update student 🥹'
        })
    }
})

module.exports = router;