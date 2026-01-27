const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res)=>{
    res.send("Student management Backend Running")
});

const PORT = 5555;

app.listen(PORT, ()=>{
    console.log(`Server Running port ${PORT}`);
});