
document.querySelectorAll('.fabTrigger').forEach(OpenMenu);

function OpenMenu(active) {
  if(active.classList.contains('fabTrigger') === true){
    active.addEventListener('click', function (e) {
      e.preventDefault();        

      if (this.parentElement.classList.contains('active') === true) {
        // Close the clicked dropdown
        this.parentElement.classList.remove('active');

      } else {
        closeMenu();
        this.parentElement.classList.add('active');
      }
    });
  }
};

function closeMenu() { 
  document.querySelectorAll('.fab').forEach(function (container) { 
    container.classList.remove('active')
  });
}


let logo = document.getElementById('animacao-logo')
const height = logo.clientHeight
const width = logo.clientWidth

logo.addEventListener('mousemove', handleMove)

function handleMove(e) {
  const xVal = e.layerX
  const yVal = e.layerY
  const yRotation = 20 * ((xVal - logo.clientWidth / 2) / logo.clientWidth)
  const xRotation = -20 * ((yVal - height / 2) / height)
  const string = 'perspective(500px) scale(1.1) rotateX(' + xRotation + 'deg) rotateY(' + yRotation + 'deg)'
  logo.style.transform = string
}

logo.addEventListener('mouseout', function() {
  logo.style.transform = 'perspective(500px) scale(1) rotateX(0) rotateY(0)'
})

logo.addEventListener('mousedown', function() {
  logo.style.transform = 'perspective(500px) scale(0.9) rotateX(0) rotateY(0)'
})

logo.addEventListener('mouseup', function() {
  logo.style.transform = 'perspective(500px) scale(1.1) rotateX(0) rotateY(0)'
})
