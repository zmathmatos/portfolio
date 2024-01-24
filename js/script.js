document.addEventListener("DOMContentLoaded", function () {
  const timeline = document.getElementById("timeline");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 500) {
      timeline && timeline.classList.add("active");
    } else {
      timeline && timeline.classList.remove("active");
    }

    handleScroll();
  });

  function handleScroll() {
    const timelineItems = document.querySelectorAll(".timeline-item");

    timelineItems.forEach((item) => {
      const targetId = item.getAttribute("data-target");
      const targetSection = document.getElementById(targetId);

      const rect = targetSection && targetSection.getBoundingClientRect();

      if (
        rect &&
        rect.top <= window.innerHeight / 2 &&
        rect.bottom >= window.innerHeight / 2
      ) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  }

  const timelineItems = document.querySelectorAll(".timeline-item");

  timelineItems.forEach((item) => {
    item.addEventListener("click", () => {
      const targetId = item.getAttribute("data-target");
      const targetSection = document.getElementById(targetId);

      window.scrollTo({
        top: targetSection ? targetSection.offsetTop : 0,
        behavior: "smooth",
      });
    });
  });
});

function toggleMenu() {
  const navbar = document.querySelector(".navbar");

  if (navbar) {
    navbar.classList.toggle("active");

    if (navbar.classList.contains("active")) {
      navbar.classList.add("animate__animated", "animate__fadeInLeft");
    } else {
      navbar.classList.remove("animate__animated", "animate__fadeInLeft");
    }
  }
}
