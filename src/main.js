import "./index.css";

$(document).ready(function () {
  $("sign-in-form").submit(function (e) {
    e.preventDefault();
  });

  //TODO: 讓帳號密碼輸入時,版型維持
  $("#account").blur(function (e) {
    if ($(e.target).val !== "") {
      $("#addr-hint-text").addClass("-translate-y-5 text-xs text-sky-500");
    } else {
      $("#addr-hint-text").addClass("-translate-y-5 text-xs text-sky-500");
    }
  });

  $("#password");
});
