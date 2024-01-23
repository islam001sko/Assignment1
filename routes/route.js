const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
});

app.post('/index.html', function (req, res) {
    const name = req.body.name;
    const gender = req.body.gender;
    const age = req.body.age;
    const height = Number(req.body.height);
    const weight = Number(req.body.weight);

    const result = weight / (height * height);

    let resultMessage = '';

    if (age === 'teen') {
        if (gender === 'male') {
            if (result < 18) {
                resultMessage = "Result for young male person is " + result + "Having a BMI below 18 for males aged 2 to 19 is considered underweight. This indicates that based on your height and weight, your body mass index falls below the healthy range expected for someone in your age and gender category.";
            } else if (result > 18 && result < 25) {
                resultMessage = "Result for young male person is " + result + "Having a BMI from 18 to 25 for males aged 2 to 19 is considered underweight. This indicates that based on your height and weight, your body mass index falls below the healthy range expected for someone in your age and gender category.";
            } else if (result > 25 && result < 30) {
                resultMessage = "Result for young male person is " + result + "Having a BMI from 25 to 30 for males aged 2 to 19 is considered underweight. This indicates that based on your height and weight, your body mass index falls below the healthy range expected for someone in your age and gender category.";
            } else if (result > 30 && result < 35) {
                resultMessage = "Result for young male person is " + result + "Having a BMI from 30 to 35 for males aged 2 to 19 is considered underweight. This indicates that based on your height and weight, your body mass index falls below the healthy range expected for someone in your age and gender category.";
            } else if (result > 35 && result < 40) {
                resultMessage = "Result for young male person is " + result + "Having a BMI from 35 to 40 for males aged 2 to 19 is considered underweight. This indicates that based on your height and weight, your body mass index falls below the healthy range expected for someone in your age and gender category.";
            } else if (result > 40 && result < 45) {
                resultMessage = "Result for young male person is " + result + "Having a BMI from 40 to 45 for males aged 2 to 19 is considered underweight. This indicates that based on your height and weight, your body mass index falls below the healthy range expected for someone in your age and gender category.";
            } else if (result > 45) {
                resultMessage = "Result for young male person is " + result + "Having a BMI more than 45 for males aged 2 to 19 is considered underweight. This indicates that based on your height and weight, your body mass index falls below the healthy range expected for someone in your age and gender category.";
            }
        } else if (gender === 'female') {
            if (result < 18) {
                resultMessage = "Result for young male person is " + result + "Having a BMI below 18 for female aged 2 to 19 is considered underweight. This indicates that based on your height and weight, your body mass index falls below the healthy range expected for someone in your age and gender category.";
            } else if (result > 18 && result < 25) {
                resultMessage = "Result for young male person is " + result + "Having a BMI from 18 to 25 for female aged 2 to 19 is considered underweight. This indicates that based on your height and weight, your body mass index falls below the healthy range expected for someone in your age and gender category.";
            } else if (result > 25 && result < 30) {
                resultMessage = "Result for young male person is " + result + "Having a BMI from 25 to 30 for female aged 2 to 19 is considered underweight. This indicates that based on your height and weight, your body mass index falls below the healthy range expected for someone in your age and gender category.";
            } else if (result > 30 && result < 35) {
                resultMessage = "Result for young male person is " + result + "Having a BMI from 30 to 35 for female aged 2 to 19 is considered underweight. This indicates that based on your height and weight, your body mass index falls below the healthy range expected for someone in your age and gender category.";
            } else if (result > 35 && result < 40) {
                resultMessage = "Result for young male person is " + result + "Having a BMI from 35 to 40 for female aged 2 to 19 is considered underweight. This indicates that based on your height and weight, your body mass index falls below the healthy range expected for someone in your age and gender category.";
            } else if (result > 40 && result < 45) {
                resultMessage = "Result for young male person is " + result + "Having a BMI from 40 to 45 for female aged 2 to 19 is considered underweight. This indicates that based on your height and weight, your body mass index falls below the healthy range expected for someone in your age and gender category.";
            } else if (result > 45) {
                resultMessage = "Result for young male person is " + result + "Having a BMI more than 45 for female aged 2 to 19 is considered underweight. This indicates that based on your height and weight, your body mass index falls below the healthy range expected for someone in your age and gender category.";
            }
        } else {
            resultMessage = "Invalid gender group.";
        }
    } else if (age === 'older') {
        if (result < 18) {
            resultMessage = "Result for young male person is " + result + "Having a BMI below 18 for people aged 2 to 19 is considered underweight. This indicates that based on your height and weight, your body mass index falls below the healthy range expected for someone in your age and gender category.";
        } else if (result > 18 && result < 25) {
            resultMessage = "Result for young male person is " + result + "Having a BMI from 18 to 25 for people aged 2 to 19 is considered underweight. This indicates that based on your height and weight, your body mass index falls below the healthy range expected for someone in your age and gender category.";
        } else if (result > 25 && result < 30) {
            resultMessage = "Result for young male person is " + result + "Having a BMI from 25 to 30 for people aged 2 to 19 is considered underweight. This indicates that based on your height and weight, your body mass index falls below the healthy range expected for someone in your age and gender category.";
        } else if (result > 30 && result < 35) {
            resultMessage = "Result for young male person is " + result + "Having a BMI from 30 to 35 for people aged 2 to 19 is considered underweight. This indicates that based on your height and weight, your body mass index falls below the healthy range expected for someone in your age and gender category.";
        } else if (result > 35 && result < 40) {
            resultMessage = "Result for young male person is " + result + "Having a BMI from 35 to 40 for people aged 2 to 19 is considered underweight. This indicates that based on your height and weight, your body mass index falls below the healthy range expected for someone in your age and gender category.";
        } else if (result > 40 && result < 45) {
            resultMessage = "Result for young male person is " + result + "Having a BMI from 40 to 45 for people aged 2 to 19 is considered underweight. This indicates that based on your height and weight, your body mass index falls below the healthy range expected for someone in your age and gender category.";
        } else if (result > 45) {
            resultMessage = "Result for young male person is " + result + "Having a BMI more than 45 for people aged 2 to 19 is considered underweight. This indicates that based on your height and weight, your body mass index falls below the healthy range expected for someone in your age and gender category.";
        }
    } else {
        resultMessage = "Invalid age group.";
    }

    res.redirect(`/result.html?message=${encodeURIComponent(resultMessage)}`);
});

app.listen(3000, function () {
    console.log('Server is running on port 3000');
});
