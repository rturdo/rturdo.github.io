// EVENT LISTENER
document.addEventListener("DOMContentLoaded", function () {
    const volunteerBtn = document.getElementById("volunteerBtn");
    const formSection = document.querySelector(".volunteer-form");
  
    volunteerBtn.addEventListener("click", function () {
      formSection.style.display = "block";
      formSection.scrollIntoView({ behavior: "smooth" });
    });
  });


// LIVE THANK YOU MESSAGE
  document.addEventListener("DOMContentLoaded", function () {
    const volunteerBtn = document.getElementById("volunteerBtn");
    const formSection = document.querySelector(".volunteer-form");
    const volunteerForm = document.getElementById("volunteerForm");
    const confirmationMessage = document.getElementById("confirmationMessage");
  
    volunteerBtn.addEventListener("click", function () {
      formSection.style.display = "block";
      formSection.scrollIntoView({ behavior: "smooth" });
    });
  
    volunteerForm.addEventListener("submit", function (e) {
      e.preventDefault();

      volunteerForm.reset();

      confirmationMessage.textContent = "Thank you for volunteering! We'll be in touch soon.";
      confirmationMessage.style.display = "block";
    });
  });