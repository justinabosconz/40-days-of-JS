// 1. Create a form dynamically using JavaScript and manipulate its behavior
let formData = {};

const form = document.createElement("form");

// name label
const nameLabel = document.createElement("label");
nameLabel.setAttribute("for", "fullname");
nameLabel.innerText = "Name";

const nameInput = document.createElement("input");
nameInput.setAttribute("type", "text");
nameInput.setAttribute("name", "fullname");
nameInput.setAttribute("id", "nameId");

form.appendChild(nameLabel);
form.appendChild(nameInput);
form.appendChild(document.createElement("br"));

// email label
const emailLabel = document.createElement("label");
emailLabel.setAttribute("for", "email");
emailLabel.innerText = "Email";

const emailInput = document.createElement("input");
emailInput.setAttribute("type", "text");
emailInput.setAttribute("name", "email");
emailInput.setAttribute("id", "emailId");

form.appendChild(emailLabel);
form.appendChild(emailInput);
form.appendChild(document.createElement("br"));

// phone label
const phoneLabel = document.createElement("label");
phoneLabel.setAttribute("for", "phone");
phoneLabel.innerText = "Phone";

const phoneInput = document.createElement("input");
phoneInput.setAttribute("type", "text");
phoneInput.setAttribute("name", "phone");
phoneInput.setAttribute("id", "phoneId");

form.appendChild(phoneLabel);
form.appendChild(phoneInput);
form.appendChild(document.createElement("br"));

// submit button
const submitButton = document.createElement("button");
submitButton.innerText = "Submit";
submitButton.setAttribute("type", "button");
submitButton.onclick = () => {
  console.log("submit button is working");
  formData.name = nameInput.value;
  formData.email = emailInput.value;
  formData.phone = phoneInput.value;
  return formData;
};
form.appendChild(submitButton);

// reset button
const resetButton = document.createElement("button");
resetButton.innerText = "Reset Form";
resetButton.setAttribute("type", "button");
resetButton.onclick = () => {
  console.log("reset button is working");
  nameInput.value = "";
  emailInput.value = "";
  phoneInput.value = "";
};
form.appendChild(resetButton);

document.body.appendChild(form);
