const express = require('express');
const app = express();

app.get('/todos', (req, res) => {
    res.json([{ task: "Learn DevOps" }]);
});

app.listen(5000, () => {
    console.log("Backend running");
});