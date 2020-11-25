const express = require('express'); 

const app = express();

const names = [
    {id: 1, firstname: 'jacob', sirname: 'stålbrand'},
    {id: 2, firstname: 'kristin', sirname: 'madshus'},
    {id: 3, firstname: 'eric', sirname: 'stålbrand'}
];

app.get('/', (req, res) => {
    res.send('hello world');
});
app.get('/api/test', (req, res) => {
    res.send(names);
});
app.get('/api/test/:id', (req, res) => {
    let name = names.find(name => name.id == parseInt(req.params.id));
    res.send(name);
});

const PORT = process.env.PORT || 8000; 
app.listen(PORT, () => console.log(`listening on port ${PORT}`));

