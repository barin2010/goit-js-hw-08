import throttle from "lodash.throttle";

const form = document.querySelector(".feedback-form");
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

const saveDataToLocalStorage = () => {
    const formData = {
      email: emailInput.value,
      message: messageInput.value,
    };
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
  };

  emailInput.addEventListener(
    "input",
    throttle(saveDataToLocalStorage, 500)
  );
  
  messageInput.addEventListener(
    "input",
    throttle(saveDataToLocalStorage, 500)
  );

  document.addEventListener("DOMContentLoaded", () => {
    const savedData = localStorage.getItem("feedback-form-state");
  
    if (savedData) {
      const formData = JSON.parse(savedData);
      emailInput.value = formData.email;
      messageInput.value = formData.message;
    }
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
  
    const formData = {
      email: emailInput.value,
      message: messageInput.value,
    };
  
    console.log(formData);
  
    localStorage.removeItem("feedback-form-state");
    emailInput.value = "";
    messageInput.value = "";
  });
