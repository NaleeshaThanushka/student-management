const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req,res)=>{
    res.send("Student management backend running..🥵");
});

const PORT = 5555;

app.listen(PORT, ()=>{
    console.log(`App listen to port ${PORT} 🥵`)
})