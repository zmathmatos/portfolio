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


