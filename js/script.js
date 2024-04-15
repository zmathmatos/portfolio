// Get all menu from document
document.querySelectorAll('.fabTrigger').forEach(OpenMenu);

// Menu Open and Close function
function OpenMenu(active) {
  if(active.classList.contains('fabTrigger') === true){
    active.addEventListener('click', function (e) {
      e.preventDefault();        

      if (this.parentElement.classList.contains('active') === true) {
        // Close the clicked dropdown
        this.parentElement.classList.remove('active');

      } else {
        // Close the opend dropdown
        closeMenu();
        // add the open and active class(Opening the DropDown)
        this.parentElement.classList.add('active');
      }
    });
  }
};

// Close the openend Menu
function closeMenu() { 
  // remove the open and active class from other opened Moenu (Closing the opend Menu)
  document.querySelectorAll('.fab').forEach(function (container) { 
    container.classList.remove('active')
  });
}


document.addEventListener("DOMContentLoaded", function() {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("#side_nav a");

  window.addEventListener("scroll", () => {
      let current = "";
      sections.forEach(section => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;
          if (pageYOffset >= sectionTop - sectionHeight / 3) {
              current = section.getAttribute("id");
          }
      });

      navLinks.forEach(link => {
          link.parentElement.classList.remove("active");
          if (link.getAttribute("href").slice(1) === current) {
              link.parentElement.classList.add("active");
          }
      });
  });
});
  