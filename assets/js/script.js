'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");
const modalDate = document.querySelector("[data-modal-date]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;
    modalDate.innerHTML = this.getAttribute("data-testimonials-date");

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}





// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}
document.querySelector('.outer').addEventListener('mousemove', (e) => {
  const card = document.querySelector('.card');
  const { offsetWidth: width, offsetHeight: height } = card;
  const { offsetX: x, offsetY: y } = e;

  const rotateY = (x / width - 0.5) * 30;
  const rotateX = (y / height - 0.5) * -30;

  card.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
});

document.querySelector('.outer').addEventListener('mouseleave', () => {
  const card = document.querySelector('.card');
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
});

function sendMail() {
  // Get form values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Validation
  if (!name || !email || !message) {
    alert("Please fill out all fields before sending.");
    return;
  }

  // EmailJS service ID and template ID (from config.js)
  const serviceID = EMAILJS_CONFIG.serviceID;
  const templateID = EMAILJS_CONFIG.templateID;

  // Prepare parameters matching EmailJS template variables
  // Make sure these variable names match your EmailJS template exactly
  const params = {
    to_email: "Mazenyasser479@gmail.com", // Your email address (recipient)
    from_name: name,
    reply_to: email,
    message: message
  };

  console.log("Sending email with params:", params);
  console.log("Service ID:", serviceID);
  console.log("Template ID:", templateID);

  // Check if emailjs is loaded
  if (typeof emailjs === 'undefined') {
    console.error("EmailJS is not loaded!");
    alert("Email service is not available. Please refresh the page and try again.");
    return;
  }

  // Send email
  emailjs.send(serviceID, templateID, params)
    .then((res) => {
      console.log("Email sent successfully:", res);
      console.log("Status:", res.status);
      console.log("Text:", res.text);
      alert("Message sent! Thank you.");
      // Reset form
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
    })
    .catch((err) => {
      console.error("Email failed with error:", err);
      console.error("Error status:", err.status);
      console.error("Error text:", err.text);
      console.error("Full error:", JSON.stringify(err, null, 2));
      
      // More specific error messages
      let errorMessage = "Sorry, something went wrong. ";
      if (err.text) {
        errorMessage += "Error: " + err.text;
      } else if (err.status) {
        errorMessage += "Status: " + err.status;
      } else {
        errorMessage += "Please check the console for details.";
      }
      alert(errorMessage);
    });
}
