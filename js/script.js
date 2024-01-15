document.addEventListener("DOMContentLoaded", function () {
  var menuButton = document.getElementById("menuButton");
  var menuList = document.getElementById("menuList");

  menuButton.addEventListener("click", function () {
    // Toggle a class to show/hide the menu
    menuList.style.display =
      menuList.style.display === "block" ? "none" : "block";
  });
});
