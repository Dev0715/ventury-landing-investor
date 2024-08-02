// Add smooth scrolling behavior to the link
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
    // document.getElementById("signup").style.display = "flex";
  });
});

// document.getElementById("close-button").addEventListener("click", function (e) {
//   e.preventDefault();
//   document.getElementById("signup").style.display = "none";
// });

// window.onload = function () {
//   var screenWidth = screen.width;
//   var screenHeight = screen.height;

//   var container = document.querySelector(".signup-container");
//   container.scrollTop = (container.scrollHeight - container.offsetHeight) / 2;

//   if (screenWidth > 1367) {
//     if (screenHeight > 600) {
//       container.style.alignItems = "center";
//     }
//   }
// };
