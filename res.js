function isValidEmail(email) {
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim());
}
function validateContactFields(data) {
  if (
    data.name.trim() === "" ||
    data.email.trim() === "" ||
    data.subject.trim() === "" ||
    data.message.trim() === ""
  ) {
    return { valid: false, message: "All fields are required." };
  
  if (!isValidEmail(data.email)) {
    return { valid: false, message: "Please enter a valid email address." };
  }
  return { valid: true, message: "Thank you! Your message has been sent." };
}
let mobileToggle = document.getElementById("mobile-toggle");
let navLinks = document.getElementById("nav-links");
mobileToggle.addEventListener("click", function () {
  navLinks.classList.toggle("active");
});
let filterButtons = document.querySelectorAll(".filter-btn");
let menuItems = document.querySelectorAll(".menu-item");
for (let i = 0; i < filterButtons.length; i++) {
  filterButtons[i].addEventListener("click", function () {
    for (let j = 0; j < filterButtons.length; j++) {
      filterButtons[j].classList.remove("active");
    }
    this.classList.add("active");
    let selectedCategory = this.getAttribute("data-filter");
    for (let k = 0; k < menuItems.length; k++) {
      let itemCategory = menuItems[k].getAttribute("data-category");

      if (selectedCategory === "all" || selectedCategory === itemCategory) {
        menuItems[k].classList.remove("hidden");
      } else {
        menuItems[k].classList.add("hidden");
      }
    }
  });
}
let contactForm = document.getElementById("contact-form");
let formFeedback = document.getElementById("form-feedback");
contactForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let nameValue = document.getElementById("name").value;
  let emailValue = document.getElementById("email").value;
  let subjectValue = document.getElementById("subject").value;
  let messageValue = document.getElementById("message").value;
  let result = validateContactFields({
    name: nameValue,
    email: emailValue,
    subject: subjectValue,
    message: messageValue,
  });
  formFeedback.textContent = result.message;
  if (result.valid) {
    formFeedback.className = "form-feedback success";
    contactForm.reset();
  } else {
    formFeedback.className = "form-feedback error";
  }
});}