let emailLogin = document.getElementById("emailLogin");
let passwordLogin = document.getElementById("passwordLogin");
let alertMassage =  document.getElementById("alertMassage");
let btn = document.getElementById("btn");
let dataUsers= [];
if (localStorage.getItem('Users') != null) {
    dataUsers = JSON.parse(localStorage.getItem('useData'));
}

function logIn() {
    if(checkInputsEmpty() == true)
    {
        //alert message
        getAlertMessage('All Inputs Required','red')
    }
    else
    {
        if(checkEmailPassword() == true)
        {
            //go to home page
            window.location.href='home.html';
        }
        else
        {
            //alert message 
            getAlertMessage('Email or Password notCorrect','red');
        }
        console.log(emailLogin.value)
        console.log(passwordLogin.value)
    }
   
}
function checkEmailPassword() {
    for (let i = 0; i < dataUsers.length; i++) {
        if (dataUsers[i].email == emailLogin.value && dataUsers[i].password == passwordLogin.value) {
            localStorage.setItem('userName',dataUsers[i].userName) //save user name
            return true;
        }
      
    }
}
function getAlertMessage(text, color) {
    alertMassage.classList.replace('d-none', 'd-block');
    alertMassage.innerHTML = text;
    alertMassage.style.color = color;
}
function checkInputsEmpty() {
    if ( emailLogin.value == '' || passwordLogin.value == '')
        return true;
    else
        return false;
}
btn.addEventListener('click', logIn);

