const express = require('express');
const app = express();
const PORT = 7070;


app.get('/user', (req, res)=>{
res.send('Welcome to my first server');
});








app.listen(PORT, ()=>{
    console.log(`Server is runing on port ${PORT}`);
})