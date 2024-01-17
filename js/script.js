function toggleMenu() {
  var navbar = document.querySelector(".navbar");

  // Adiciona ou remove a classe 'active' para mostrar ou esconder o menu
  navbar.classList.toggle("active");

  // Adiciona a classe 'animate__animated animate__fadeInLeft' quando o menu é aberto
  if (navbar.classList.contains("active")) {
    navbar.classList.add("animate__animated", "animate__fadeInLeft");
  } else {
    // Remove a classe de animação quando o menu é fechado
    navbar.classList.remove("animate__animated", "animate__fadeInLeft");
  }
}
