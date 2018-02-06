function checkValidEmail() {
  var email = document.getElementsByClassName("registration__email")[0].value;
  var result = email.match(/^[0-9a-z-\.]+\@[0-9a-z-]{1,}\.[a-z]{2,}$/i);
  if (!result){
    return false;
  }
  return true;
}

function checkPasswords() {
  var pass = document.getElementsByClassName("registration__password")[0].value; 
  var passConfirm = document.getElementsByClassName("registration__password-repeat")[0].value;
  if ((pass.length < 6) || (pass != passConfirm)) {
    return false;  
  }
  return true;
}

function checkRules() {
  var result = document.getElementsByClassName("registration__check-confirmation")[0].checked;
  if (!result) {
    return false;
  }
  return true;
}

document.getElementsByClassName("registration")[0].onsubmit = function() {
  if (checkValidEmail() && checkPasswords() && checkRules()) {
    alert("Регистрация прошла успешно!");  
  } else {
    if (!checkValidEmail()) {
      alert('Введите валидный e-mail.');
    } else if (!checkPasswords()) {
      alert('Пароли должны быть неменее 6-ти символов и совпадать.');
    } else {
      alert('Примите условия соглашения.');
    }
    return false;
  }
};