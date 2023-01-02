const title = document.title;

window.addEventListener("blur", () => {
  document.title = "Please Come Back :(";
});

window.addEventListener("focus", () => {
  document.title = title;
});

const loadingPage = document.getElementById("loading");

window.addEventListener("load", function () {
  loadingPage.style.display = "none";
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElement = document.querySelectorAll(".hidden");
hiddenElement.forEach((el) => observer.observe(el));

// Send Form

const scriptURL = "https://script.google.com/macros/s/AKfycbw65exA_gDwqm9IHaxA-86lvJ2EjxJBUey9dxnh_ON2SSNpuOzEQQfR-ewDiUU2U4dW/exec";
const form = document.forms["form-send"];
const submitButton = document.getElementById("submit");
const result = document.getElementById("response");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  submitButton.value = "Sending...";
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      (result.innerHTML = "Thank You :) "), (submitButton.value = "Send"), form.reset();
    })
    .catch((error) => (submitButton.value = "Fail To Send"));
});
