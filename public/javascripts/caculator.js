function caculate() {
    let error = "";
    let flag = false;

    let firstNum = document.getElementById("firstNumber").value;

    if(firstNum == ""){
        flag = true;
        error = "Số thứ nhất chưa được nhập!\n";
    }
    else{
        if(isValidFloat(firstNum) == false){
            flag = true;
            error = "Số thứ nhất không hợp lệ!\n";
        }
    }

    let secondNum = document.getElementById("secondNumber").value;

    if(secondNum == ""){
        flag = true;
        error += "Số thứ hai chưa được nhập!\n";
    }
    else{
        if(isValidFloat(secondNum) == false){
            flag = true;
            error += "Số thứ hai không hợp lệ!\n";
        }
    }

    let operators = document.getElementsByName("operator");
    let selectedOperator = "";
    for(i = 0; i < operators.length; i++){
        if(operators[i].checked == true){
            if(i == 0){
                selectedOperator = "add";
                break;
            }
            else if(i == 1){
                selectedOperator = "subtract";
                break;
            }
            else if(i == 2){
                selectedOperator = "multiply";
                break;
            }
            else if(i == 3){
                selectedOperator = "divide";
                break;
            }
        }
    }

    if(selectedOperator == ""){
        error += "Phép tính chưa được chọn!\n";
    }
    else{
        if(flag == true){
            // document.getElementById("note").innerText = error;
        }
        else{
            if(selectedOperator == "divide"){
                if(parseFloat(secondNum) == 0.0){
                    error = "Số thứ hai (mẫu số) không hợp lệ để thực hiện phép tính đó!";
                }
            }
        }
    }

    if(error == ""){
        return true;
    }
    else{
        document.getElementById("result").setAttribute("value","");
        document.getElementById("note").innerText = error;
        return false;
    }
}

function isValidFloat(n) {
    return (/^-?[\d]*(\.[\d]+)?$/g).test(n);
}