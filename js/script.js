// Add smooth scrolling behavior to the link
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    // document.querySelector(this.getAttribute("href")).scrollIntoView({
    //   behavior: "smooth",
    // });
    document.getElementById("signup").style.display = "flex";
  });
});

document.getElementById("close-button").addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("signup").style.display = "none";
});
