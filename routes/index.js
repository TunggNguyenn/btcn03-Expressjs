var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'BÉ TẬP TÍNH', firstNumber: '', secondNumber: '', result: '', operator: ""});
});

router.post('/', function (req, res, next) {
    const firstNum = parseFloat(req.body.firstNumber);
    const secondNum = parseFloat(req.body.secondNumber);
    const operator = req.body.operator;
    let result;

    if (operator == "add") {
        result = firstNum + secondNum;
    } else if (operator == "subtract") {
        result = firstNum - secondNum;
    } else if (operator == "multiply") {
        result = firstNum * secondNum;
    } else if (operator == "divide") {
        result = firstNum / secondNum;
    }

    res.render('index', {title: 'BÉ TẬP TÍNH', firstNumber: firstNum, secondNumber: secondNum, result: result, operator: operator});
})

module.exports = router;
