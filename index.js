const express = require('express'); 
const app = express() 

app.get('/', (req, res) => res.send('d')); 


app.listen(3000, () => console.log("Example app listeneing on port 3000"))
console.log('hello world');