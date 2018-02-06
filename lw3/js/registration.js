function checkValidEmail() {
  var email = $(".registration__email");
  var result = $(email[0]).val().match(/^[0-9a-z-\.]+\@[0-9a-z-]{1,}\.[a-z]{2,}$/i);
  if (!result){
    return false;
  }
  return true;
}