function checkValidEmail() {
  var email = $(".registration__email");
  var result = $(email[0]).val().match(/^[0-9a-z-\.]+\@[0-9a-z-]{1,}\.[a-z]{2,}$/i);
  if (!result){
    return false;
  }
  return true;
}

function checkPasswords() {
  var pass = $(".registration__password"); 
  var passConfirm = $(".registration__password-repeat");
  if (($(pass[0]).val().length < 6) 
      || ($(pass[0]).val() != $(passConfirm[0]).val())) {
    return false;  
  }
  return true;
}

function checkRules() {
  if ($(".registration__check-confirmation").prop("checked")) { 
    return true;
  }
  return false;
}