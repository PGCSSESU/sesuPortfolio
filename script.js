// JavaScript to add the "lights on" effect when clicking the "Home" link
document.addEventListener("DOMContentLoaded", function () {
    const homeLink = document.getElementById("homeLink");

    homeLink.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent the default link behavior (scrolling to the anchor)
        
        // Toggle the "active" class to turn the link "on"
        homeLink.classList.toggle("active");
    });
});
