const express= require('express');
const app= express();
const http=require('http').Server(app);
const port= 8090;

const io= require('socket.io')(http);

app.get('/', function(req, res) {
    res.send('Hello world!');
});

// const server = http.listen(port, function() {
//     console.log(`listening on *:${port}`);
// });

http.listen(port,()=>{
    console.log(`listening on port ${port}`)
});