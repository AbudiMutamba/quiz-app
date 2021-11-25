const express = require('express');
const app = express();
const port = 3002;

app.get('/', (req,res)=>{
    res.send('Hello World! ');
});

app.get ('/login', (req, res)=>{
    //login logic
    res.json({
        'result':'success',
        'message':'Login Successful'
    });
})
app.listen(port,() =>{
    console.log(`Api working on localhost:${port}`);
});

// fuction getFunction(req,res){
//     res.send('Hello World!')
// }

// app.get('/', getFunction);


