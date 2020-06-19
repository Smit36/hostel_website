const express = require('express');
const app = express();
const path = require('path');


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});// allow cross origi


app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});// 404 not found

app.listen(8080, () => {
    console.log("Server Started At http://localhost:8080/");
});// start server at port 8080 which is default of gcloud


