let userName = document.getElementById("userName");
let email = document.getElementById("email");
let password = document.getElementById("password");
let btn = document.getElementById("btn");
let alertMassage = document.getElementById("alertMassage");
let dataUsers= [];




 if(localStorage.getItem("useData")!=null){
    dataUsers = JSON.parse(localStorage.getItem("useData"));
 }
function signUp(){
    let data ={
        userName: userName.value,
        email: email.value,
        password: password.value
    }
    if (checkInputsEmpty() == true) {
     
        getAlertMessage('All Inputs Required', 'red');
    }
    else {
        if(checkEmailExist() == true)
        {
            getAlertMessage('Email Already Exist', 'red');
        }
        else
        {
            dataUsers.push(data);
            localStorage.setItem("useData", JSON.stringify(dataUsers));
            clearForm();
            getAlertMessage('Success', 'green');
        }
    }
  
}



function checkInputsEmpty() {
    if (userName.value == '' || email.value == '' || password.value == '')
        return true;
    else
        return false;
}

function getAlertMessage(text, color) {
    alertMassage.classList.replace('d-none', 'd-block');
    alertMassage.innerHTML = text;
    alertMassage.style.color = color;
}
function clearForm() {
    userName.value = '';
    email.value = '';
    password.value = '';
}


function checkEmailExist() {
    for (let i = 0; i < dataUsers.length; i++) {
        if (dataUsers[i].email == email.value)
            return true;
    }
}

btn.addEventListener("click",signUp);