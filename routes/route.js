const express = require('express');
const bodyParses = require('body-parser');
const path = require('path');
const app = express();

app.use(bodyParses.urlencoded({ extended: true }));

app.get('/', function (req, res) {

    const indexPath = path.join(__dirname, '..', 'views', 'index.html');

    res.sendFile(indexPath, (err) => {
        if (err) {
            console.error('Error sending file:', err);
            res.status(err.status).end();
        } else {
            console.log('File sent successfully');
        }
    });
});

module.exports = app;

app.post('/index.html', function (req, res) {
    var name = req.body.name;
    var gender = req.body.gender;
    var age = req.body.age;
    var height = Number(req.body.height)
    var weight = Number(req.body.weight);
    var operation = req.body.operation;
    var result = weight / (height * height);

    if (operation === 'do') {
        if (age === 'teen') {
            if (gender === 'male') {
                res.send("Result for young male person is " + result);
            } else if (gender === 'female') {
                res.send("Result for young female person is " + result);
            } else {
                res.send("Invalid gender group.");
            }
        } else if (age === 'older') {
            res.send("Result for older people is " + result);
        } else {
            res.send("Invalid age group.");
        }
    } else {
        res.send("Invalid operation or age group.");
    }


});



app.listen(3000, function () {
    console.log('server is running on port 3000');
});
