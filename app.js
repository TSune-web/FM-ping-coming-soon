const form = document.getElementsByTagName("form")[0];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  ValidateEmail(form.email.value);

  e.preventDefault();
  e.stopPropagation();
});

function ValidateEmail(mail) {
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (mail === "") {
    emptyMessage();
    return;
  } else if (!regex.test(mail)) {
    errorMessage();
    return;
  }
  success();
}

function emptyMessage() {
  const emptyMsg = "Whoops! It looks like you forgot to add your email...";
  msg.innerHTML = emptyMsg;
  classChangeHandler("success", "error");
}

function errorMessage() {
  const errorMsg = "Please provide a valid email address.";
  msg.innerHTML = errorMsg;
  classChangeHandler("success", "error");
}

function success() {
  const successMsg = "Thank you for the subscription!";
  msg.innerHTML = successMsg;
  classChangeHandler("error", "success");
}

function classChangeHandler(removeCls, addCls) {
  form.classList.remove(removeCls);
  form.classList.add(addCls);
}
