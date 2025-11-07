const sendButton = document.getElementById("sendMail");
const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const message = document.getElementById("message");

sendButton.addEventListener("click", () => {
  if (
    name.value == "" ||
    email.value == "" ||
    phone.value == "" ||
    message.value == ""
  ) {
    alert("Please fill all the fields");
  } else {
    alert("Your message has been sent successfully");
    const data = {
      name: name.value,
      email: email.value,
      phone: phone.value,
      message: message.value,
    };
    console.log(data);
    name.value = "";
    email.value = "";
    phone.value = "";
    message.value = "";
  }
});
