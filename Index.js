const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');

app.use(cors());
app.use(express.json())

const users = [
    {name: 'rakin' , id: 1 , email : 'rakin@gmail.com'},
    {name: 'sakin' , id: 2 , email : 'sakin@gmail.com'},
    {name: 'fakin' , id: 3 , email : 'fakin@gmail.com'},
    {name: 'hakin' , id: 4 , email : 'hakin@gmail.com'},
    {name: 'jakin' , id: 5 , email : 'jakin@gmail.com'},
    {name: 'kakin' , id: 6 , email : 'kakin@gmail.com'},
    {name: 'dakin' , id: 7 , email : 'dakin@gmail.com'},
]



app.get('/' , (req , res)=>{
    res.send('Hello world from my siuuu')
})

app.get('/users' , (req , res)=>{
    //filter by query parameter
    if(req.query.name){
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search))
        res.send(matched);
    }
    else{
    res.send(users)
}
})

app.post('/user',(req,res) =>{
   const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user)
})


app.get('/user/:id' , (req , res)=>{
    const id = req.params.id;
    const user = users.find(u => u.id == id)
    res.send(user)
})

app.listen(port,()=>{
    console.log('listening to port',port);
})