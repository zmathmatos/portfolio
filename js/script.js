function toggleMenu() {
  var navbar = document.querySelector(".navbar");

  navbar.classList.toggle("active");

  if (navbar.classList.contains("active")) {
    navbar.classList.add("animate__animated", "animate__fadeInLeft");
  } else {
    navbar.classList.remove("animate__animated", "animate__fadeInLeft");
  }
}
