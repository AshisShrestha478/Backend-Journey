const express = require('express');
const app = express();
const port = 3000;

app.get('/world', (req, res) => {
    res.send('Hello World!');
});

// app.get('/status', (req, res) => {
//     res.json({ status: 'OK' });
// });

// app.get('/learn', (req, res) => {
//     res.send("I am learning Express.js!");
// });

// app.get('/array', (req, res) => {
//     res.send([1, 2, 3, 4, 5]);
// });

// app.get('/json', (req, res) => {
//     res.json({ data: [1, 2, 3, 4, 5] });
// });

// app.get('/user/:id', (req, res) => {
//     const name = req.params.id
//     res.send(`Hello ${name}`);
// });

// app.get('/user/:id/:num', (req, res) => {
//     const name = req.params.id
//     const age = req.params.num
//     res.send(`Hello ${name}, You are ${age}`);
// });

// app.get('/user', (req, res) => {
//     const name = req.query.name;
//     const age = req.query.age;
//     res.json({ message: `Hello ${name}, You are ${age}` });
// });

// app.get('/books/:isbn', (req, res) => {
//     const num = req.params.isbn
//     res.send(`The ISBN number is ${num}`)
// })

//To make this work put it at the top of the /books/:isbn
// app.get('/books/filter', (req,res) => {
//     const price = req.query.price
//     const category = req.query.category
//     res.json({price: `${price}`, category: `${category}`})
// });

app.get('/filter', (req,res) => {
    const price = req.query.price
    const category = req.query.category
    res.json({price, category})
});

app.get('/book/:isbn', (req, res) =>{
    const num = req.params.isbn
    const price = req.query.price
    res.json({num, price})
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});