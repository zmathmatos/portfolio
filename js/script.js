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

function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle("dark-mode");

  // Troca entre os ícones "moon" e "sun"
  const moonIcon = document.getElementById("moon-icon");
  const sunIcon = document.getElementById("sun-icon");
  moonIcon.style.display = body.classList.contains("dark-mode")
    ? "none"
    : "inline-block";
  sunIcon.style.display = body.classList.contains("dark-mode")
    ? "inline-block"
    : "none";

  // Salva o estado do modo escuro no localStorage
  const isDarkMode = body.classList.contains("dark-mode");
  localStorage.setItem("darkMode", isDarkMode);

  // Modifica as variáveis do header
  const header = document.querySelector(".header");
  const isDarkModeHeader = body.classList.contains("dark-mode");

  // Use as variáveis CSS como strings
  const headerBgColor = isDarkModeHeader
    ? "--header-bg-color-dark"
    : "--header-bg-color-light";
  const headerTextColor = isDarkModeHeader
    ? "--header-text-color-dark"
    : "--header-text-color-light";

  // Aplica as modificações no header
  header.style.backgroundColor = `var(${headerBgColor})`;
  header.style.color = `var(${headerTextColor})`;
}

// Recupera o estado do modo escuro do localStorage e aplica
const storedDarkMode = localStorage.getItem("darkMode");
if (storedDarkMode === "true") {
  document.body.classList.add("dark-mode");

  // Aplica as modificações no header se necessário
  const header = document.querySelector(".header");
  header.style.backgroundColor = "var(--header-bg-color-dark)";
  header.style.color = "var(--header-text-color-dark)";

  // Atualiza a visibilidade dos ícones "moon" e "sun" no modo escuro
  const moonIcon = document.getElementById("moon-icon");
  const sunIcon = document.getElementById("sun-icon");
  moonIcon.style.display = "none";
  sunIcon.style.display = "inline-block";
}
