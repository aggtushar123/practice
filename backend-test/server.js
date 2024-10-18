const express = require('express');
const cors = require('cors');  
const app = express();
const PORT = 3000;


app.use(cors({
  origin: 'http://localhost:5174'  
}));


app.use(express.json());

app.post('/increment', (req, res) => {
    let {count} = req.body;
    count += 1;
    console.log(count)
    res.json({count: count});
})

app.listen(PORT, () => {
    console.log(`Sever running on ${PORT}`)
})