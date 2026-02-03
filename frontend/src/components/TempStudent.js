import React, { useState } from "react";
import axios from "axios";
import './TempStudent.css'


function AddStudent(){
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [course, setCourse] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState(false)

    const addStudent = async()=>{
        try{
            if(!name || !age || !course){
            alert('All fields are required');
        }
            await axios.post("http://localhost:5555/api/students/add", {name, age, course});
            setName("");
            setAge("");
            setCourse("");
            setMessage("Student added successfully 🥰");
            setError(false);
        }catch(error){
            setMessage("Failed to add student 😢");
            setError(true)
        }
    };
    return(
        
        <div className="main">
            {message &&(
                <div className="message" style={{color:error ? "red" : "green"}}>
                    {message}
                    </div>
            )}
            <input
                placeholder='Enter your name'
                value={name}
                onChange={(e)=>setName(e.target.value)}
            />
            
            <input
                placeholder='Enter your age'
                value={age}
                onChange={(e)=>setAge(e.target.value)}
            />
            
            <input
                placeholder='Enter your course'
                value={course}
                onChange={(e)=>setCourse(e.target.value)}
            />
            <button onClick={addStudent}>Add Student</button>
        </div>
        
    )
}

export default AddStudent;